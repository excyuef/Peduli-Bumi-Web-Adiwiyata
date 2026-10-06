import { useState } from "react";
import { CircleHelp, Flame, RotateCcw, Sparkles, TreePine, Waves } from "lucide-react";

const choices = [
	{
		id: "air",
		name: "Air",
		icon: Waves,
		color: "bg-[#B9DFF5]",
		note: "memadamkan api",
	},
	{
		id: "api",
		name: "Api",
		icon: Flame,
		color: "bg-custom-red",
		note: "membakar pohon",
	},
	{
		id: "pohon",
		name: "Pohon",
		icon: TreePine,
		color: "bg-custom-green",
		note: "menyerap air",
	},
];

const beats = {
	air: "api",
	api: "pohon",
	pohon: "air",
};

function PickDisplay({ label, choice, isWinner = false }) {
	const Icon = choice?.icon ?? CircleHelp;

	return (
		<div className="flex min-w-0 flex-col items-center gap-3 text-center" data-aos="fade-up">
			<span className="font-heading text-xs tracking-wide sm:text-sm" data-aos="fade-up" data-aos-delay="100">
				{label}
			</span>
			<div
				className={`grid size-24 place-items-center border-3 border-black shadow-[4px_4px_0_var(--ink)] transition sm:size-32 ${choice?.color ?? "bg-custom-white"} ${isWinner ? "-translate-y-1" : ""}`}
				data-aos="fade-up"
				data-aos-delay="150"
			>
				<Icon className="size-12 sm:size-16" strokeWidth={2.4} />
			</div>
			<span className="min-h-6 font-bold text-lg sm:text-xl" data-aos="fade-up" data-aos-delay="200">
				{choice?.name ?? "?"}
			</span>
		</div>
	);
}

function Suit() {
	const [score, setScore] = useState({ wins: 0, losses: 0, draws: 0 });
	const [round, setRound] = useState(null);

	function play(playerId) {
		const opponentId = choices[Math.floor(Math.random() * choices.length)].id;
		const result = playerId === opponentId
			? "draw"
			: beats[playerId] === opponentId
				? "win"
				: "loss";

		setRound({
			player: choices.find((choice) => choice.id === playerId),
			opponent: choices.find((choice) => choice.id === opponentId),
			result,
		});
		setScore((current) => ({
			...current,
			wins: current.wins + Number(result === "win"),
			losses: current.losses + Number(result === "loss"),
			draws: current.draws + Number(result === "draw"),
		}));
	}

	function resetGame() {
		setRound(null);
		setScore({ wins: 0, losses: 0, draws: 0 });
	}

	const resultCopy = {
		win: "Kamu menang! Alam berpihak padamu.",
		loss: "Kali ini komputer unggul. Coba lagi!",
		draw: "Seri! Kalian memilih elemen yang sama.",
	};

	return (
		<main className="min-h-[70vh] bg-custom-white px-4 pb-16 pt-28 text-custom-brown sm:px-6 md:px-8 lg:px-12 xl:px-16">
			<div className="mx-auto max-w-6xl">
				<header className="mb-8 flex flex-col gap-3 sm:mb-10">
					<p className="flex items-center gap-2 font-bold uppercase text-sm" data-aos="fade-up">
						<Sparkles size={18} />
						GAME EKOLOGI
					</p>
					<h1 className="font-heading text-4xl leading-tight sm:text-5xl md:text-6xl" data-aos="fade-up" data-aos-delay="100">
						EKO SUIT
					</h1>
					<p className="max-w-2xl text-lg sm:text-xl" data-aos="fade-up" data-aos-delay="200">
						Pilih elemen alam dan adu strategi. Air mengalahkan api,
						api mengalahkan pohon, pohon mengalahkan air.
					</p>
				</header>

				<section className="border-3 border-black bg-[#DDF0F8] p-4 shadow-[6px_6px_0_var(--ink)] sm:p-6 md:p-8" data-aos="fade-up">
					<div className="mb-6 flex items-center justify-between gap-4 border-b-3 border-black pb-4" data-aos="fade-up">
						<div>
							<p className="font-bold uppercase text-xs tracking-wide" data-aos="fade-up">PAPAN SKOR</p>
							<div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm font-bold sm:gap-x-7 sm:text-base" data-aos="fade-up" data-aos-delay="100">
								<span>MENANG <b>{score.wins}</b></span>
								<span>SERI <b>{score.draws}</b></span>
								<span>KALAH <b>{score.losses}</b></span>
							</div>
						</div>
						<button
							type="button"
							onClick={resetGame}
							aria-label="Ulangi permainan dan reset skor"
							title="Reset permainan"
							className="grid size-11 shrink-0 place-items-center border-3 border-black bg-custom-white shadow-[3px_3px_0_var(--ink)] transition hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--ink)] active:translate-y-0.5 active:shadow-none"
							data-aos="fade-up"
							data-aos-delay="200"
						>
							<RotateCcw size={19} />
						</button>
					</div>

					<div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 py-2 sm:gap-8 sm:py-5" data-aos="fade-up">
						<PickDisplay
							label="KAMU"
							choice={round?.player}
							isWinner={round?.result === "win"}
						/>
						<span className="font-heading text-xl sm:text-3xl" data-aos="fade-up" data-aos-delay="100">VS</span>
						<PickDisplay
							label="LAWAN"
							choice={round?.opponent}
							isWinner={round?.result === "loss"}
						/>
					</div>

					<div aria-live="polite" className="mt-5 min-h-14 border-y-3 border-black py-3 text-center" data-aos="fade-up">
						<p className="font-heading text-base sm:text-lg" data-aos="fade-up" data-aos-delay="100">
							{round ? resultCopy[round.result] : "Siap? Pilih elemenmu!"}
						</p>
					</div>

					<div className="mt-5 grid grid-cols-3 gap-3 sm:mt-6 sm:gap-4" data-aos="fade-up">
						{choices.map((choice) => {
							const Icon = choice.icon;
							const selected = round?.player.id === choice.id;

							return (
								<button
									key={choice.id}
									type="button"
									onClick={() => play(choice.id)}
									aria-pressed={selected}
									className={`${choice.color} flex min-h-28 flex-col items-center justify-center gap-2 border-3 border-black p-3 shadow-[4px_4px_0_var(--ink)] transition hover:-translate-y-1 hover:shadow-[6px_6px_0_var(--ink)] active:translate-y-0.5 active:shadow-none sm:min-h-36 sm:gap-3 sm:p-4 ${selected ? "ring-4 ring-black ring-offset-2" : ""}`}
									data-aos="fade-up"
									data-aos-delay={String(100 + choices.indexOf(choice) * 100)}
								>
									<Icon className="size-8 sm:size-10" strokeWidth={2.4} />
									<span className="font-heading text-sm uppercase sm:text-lg">{choice.name}</span>
								</button>
							);
						})}
					</div>
				</section>

				<section aria-label="Aturan suit alam" className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4" data-aos="fade-up">
					{choices.map((choice) => {
						const Icon = choice.icon;

						return (
							<div key={choice.id} className="flex items-center gap-3 border-3 border-black bg-custom-white p-3" data-aos="fade-up" data-aos-delay={String(choices.indexOf(choice) * 100)}>
								<span className={`${choice.color} grid size-11 shrink-0 place-items-center border-2 border-black`}>
									<Icon size={23} />
								</span>
								<p className="text-sm font-bold capitalize">
									{choice.name} <span aria-hidden="true">&gt;</span> {choices.find((item) => item.id === beats[choice.id]).name.toLowerCase()}
								</p>
							</div>
						);
					})}
				</section>
			</div>
		</main>
	);
}

export default Suit;
