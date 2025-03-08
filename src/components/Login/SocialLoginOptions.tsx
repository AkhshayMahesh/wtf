export function SocialLoginOptions() {
	return (
		<div className="mt-8 flex w-full max-w-[401px] flex-col whitespace-nowrap text-sm">
			<div className="flex w-full items-center gap-5 self-center text-center font-medium text-slate-400">
				<hr className="my-auto h-px w-[173px] flex-1 shrink basis-0 self-stretch border border-solid border-gray-200" />
				<span className="my-auto self-stretch">or</span>
				<hr className="my-auto h-px w-[173px] flex-1 shrink basis-0 self-stretch border border-solid border-gray-200" />
			</div>
			<div className="mt-5 flex w-full items-start gap-5 font-semibold text-gray-900">
				<button
					type="button"
					className="flex flex-1 shrink basis-0 items-center justify-evenly self-stretch rounded-lg border-2 border-solid border-zinc-200 bg-white px-5 py-3 transition-colors hover:bg-gray-50"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 48 48"
						width="24px"
						height="24px"
						className="mr-2"
					>
						<path
							fill="#4285F4"
							d="M24 9.5c3.9 0 7.1 1.4 9.5 3.7l7.1-7.1C36.1 2.4 30.5 0 24 0 14.8 0 7.1 5.4 3.3 13.3l8.4 6.5C13.4 13.6 18.2 9.5 24 9.5z"
						/>
						<path
							fill="#34A853"
							d="M46.6 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3.2-2.4 5.9-5 7.7l8.4 6.5c4.9-4.5 7.5-11.1 7.5-18.7z"
						/>
						<path
							fill="#FBBC05"
							d="M3.3 13.3C1.2 17.1 0 21.4 0 26s1.2 8.9 3.3 12.7l8.4-6.5C9.6 30.2 9 28.2 9 26s.6-4.2 1.7-6L3.3 13.3z"
						/>
						<path
							fill="#EA4335"
							d="M24 48c6.5 0 12.1-2.1 16.1-5.7l-8.4-6.5c-2.3 1.5-5.2 2.4-8.3 2.4-5.8 0-10.8-3.9-12.6-9.2l-8.4 6.5C7.1 42.6 14.8 48 24 48z"
						/>
						<path fill="none" d="M0 0h48v48H0z" />
					</svg>
					Google
				</button>
				<button
					type="button"
					className="flex flex-1 shrink basis-0 items-center justify-evenly self-stretch rounded-lg border-2 border-solid border-zinc-200 bg-white px-5 py-3 transition-colors hover:bg-gray-50"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 48 48"
						width="24px"
						height="24px"
						className="mr-2"
					>
						<path
							fill="#1877F2"
							d="M24 0C10.7 0 0 10.7 0 24c0 11.9 8.7 21.8 20 23.8V30.9h-6v-6.9h6v-5.3c0-6 3.6-9.3 9.1-9.3 2.6 0 5.3.5 5.3.5v5.8h-3c-3 0-3.9 1.9-3.9 3.8v4.5h6.6l-1 6.9h-5.6v16.9C39.3 45.8 48 35.9 48 24 48 10.7 37.3 0 24 0z"
						/>
						<path fill="none" d="M0 0h48v48H0z" />
					</svg>
					Facebook
				</button>
			</div>
		</div>
	);
}
