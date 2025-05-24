import clsx from "clsx";

type Props = {
	teamColor: string;
	short: string;
	position?: number;
	className?: string;
};

export default function DriverTag({ position, teamColor, short, className }: Props) {
	return (
		<div
			id="walkthrough-driver-position"
			className={clsx(
				"col-span-2 grid w-fit grid-cols-subgrid items-center justify-between gap-0.5 rounded-lg bg-zinc-500 px-1 py-1 font-black",
				className,
			)}
			style={{ backgroundColor: `#${teamColor}` }}
		>
			{position && <p className="mr-1.5 px-1 text-xl leading-none">{position}</p>}

			<div className="flex h-min w-full items-center justify-start rounded-md bg-white px-1">
				<p className="font-mono text-zinc-500" style={{ ...(teamColor && { color: `#${teamColor}` }) }}>
					{short}
				</p>
			</div>
		</div>
	);
}
