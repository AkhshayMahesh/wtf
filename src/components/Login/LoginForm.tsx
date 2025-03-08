"use client";
import { SocialLoginOptions } from "./SocialLoginOptions";
import { useState } from "react";

interface LoginFormProps {
	isLogin: boolean;
}

export function LoginForm({ isLogin }: LoginFormProps) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [fullName, setFullName] = useState("");
	const [isLoginPage, setIsLoginPage] = useState(isLogin);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle login or signup logic here
	};

	return (
		<div className="mr-0 flex h-full flex-col justify-center bg-white px-32 py-64 tracking-normal max-xl:px-[5%] max-xl:py-24 max-lg:max-w-full">
			<h1 className="self-start text-center text-3xl font-semibold text-gray-900">
				{isLoginPage ? "Log In" : "Sign Up"}
			</h1>
			<form
				onSubmit={handleSubmit}
				className="mt-10 flex w-full max-w-[403px] flex-col justify-center"
			>
				<div className="flex w-full flex-col items-end">
					<div className="w-full">
						<div className="w-full">
							<div className="w-full text-sm font-medium text-slate-400">
								{!isLoginPage && (
									<div className="relative mb-4 w-full">
										<svg
											className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											width="20"
											height="20"
										>
											<path
												d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
												fill="#ADB0CD"
											/>
										</svg>
										<input
											type="text"
											placeholder="Full Name"
											value={fullName}
											onChange={(e) =>
												setFullName(e.target.value)
											}
											className="w-full gap-4 self-stretch rounded-lg border-2 border-solid border-zinc-200 bg-white px-5 py-3 pl-10"
											required
										/>
									</div>
								)}
								<div className="relative w-full">
									<svg
										className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										width="20"
										height="20"
									>
										<path
											d="M21.5001 3.04997C21.5001 1.86747 20.5326 0.899963 19.3501 0.899963H2.15001C0.967503 0.899963 0 1.86747 0 3.04997V15.95C0 17.1325 0.967503 18.1 2.15001 18.1H19.3501C20.5326 18.1 21.5001 17.1325 21.5001 15.95V3.04997ZM19.3501 3.04997L10.75 8.42499L2.15001 3.04997H19.3501ZM19.3501 15.95H2.15001V5.19998L10.75 10.575L19.3501 5.19998V15.95Z"
											fill="#ADB0CD"
										/>
									</svg>
									<input
										type="email"
										placeholder="Your email"
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
										className="w-full gap-4 self-stretch rounded-lg border-2 border-solid border-zinc-200 bg-white px-5 py-3 pl-10"
										required
									/>
								</div>
								<div className="relative mt-4 w-full">
									<svg
										className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										width="20"
										height="20"
									>
										<path
											xmlns="http://www.w3.org/2000/svg"
											d="M15.8179 12.3636L17.5451 14.0909L20.9997 10.6364L19.2724 8.90909"
											stroke="#ADB0CD"
											strokeWidth="2.30303"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											xmlns="http://www.w3.org/2000/svg"
											d="M10.8452 12.1546L20.9999 2"
											stroke="#ADB0CD"
											strokeWidth="2.30303"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											xmlns="http://www.w3.org/2000/svg"
											d="M7.18182 21C10.0437 21 12.3636 18.68 12.3636 15.8182C12.3636 12.9563 10.0437 10.6364 7.18182 10.6364C4.31998 10.6364 2 12.9563 2 15.8182C2 18.68 4.31998 21 7.18182 21Z"
											stroke="#ADB0CD"
											strokeWidth="2.30303"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<input
										type="password"
										placeholder="Password"
										value={password}
										onChange={(e) =>
											setPassword(e.target.value)
										}
										className="w-full gap-4 self-stretch rounded-lg border-2 border-solid border-zinc-200 bg-white px-5 py-3 pl-10"
										required
									/>
								</div>
								{!isLoginPage && (
									<div className="relative mt-4 w-full">
										<svg
											className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											width="20"
											height="20"
										>
											<path
												xmlns="http://www.w3.org/2000/svg"
												d="M15.8179 12.3636L17.5451 14.0909L20.9997 10.6364L19.2724 8.90909"
												stroke="#ADB0CD"
												strokeWidth="2.30303"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												xmlns="http://www.w3.org/2000/svg"
												d="M10.8452 12.1546L20.9999 2"
												stroke="#ADB0CD"
												strokeWidth="2.30303"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												xmlns="http://www.w3.org/2000/svg"
												d="M7.18182 21C10.0437 21 12.3636 18.68 12.3636 15.8182C12.3636 12.9563 10.0437 10.6364 7.18182 10.6364C4.31998 10.6364 2 12.9563 2 15.8182C2 18.68 4.31998 21 7.18182 21Z"
												stroke="#ADB0CD"
												strokeWidth="2.30303"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<input
											type="password"
											placeholder="Confirm Password"
											value={confirmPassword}
											onChange={(e) =>
												setConfirmPassword(
													e.target.value,
												)
											}
											className="w-full gap-4 self-stretch rounded-lg border-2 border-solid border-zinc-200 bg-white px-5 py-3 pl-10"
											required
										/>
									</div>
								)}
							</div>
							<button
								type="submit"
								className="mt-6 w-full gap-2.5 self-stretch rounded-lg bg-blue-600 px-16 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-blue-700 max-md:px-5"
							>
								{isLoginPage ? "Log In" : "Sign Up"}
							</button>
						</div>
						{isLoginPage && (
							<button
								type="button"
								className="mt-4 w-full gap-2.5 self-stretch text-center text-base font-semibold leading-relaxed text-blue-600 transition-colors hover:text-blue-700"
							>
								Forgot password?
							</button>
						)}
					</div>
					<SocialLoginOptions />
				</div>
				<div className="mt-10 flex items-start gap-2 self-start text-center text-base leading-relaxed">
					<p className="text-slate-400">
						{isLoginPage
							? "Don't have an account?"
							: "Already have an account?"}
					</p>
					<button
						type="button"
						className="font-semibold text-blue-600 transition-colors hover:text-blue-700"
						onClick={() => setIsLoginPage(!isLoginPage)}
					>
						{isLoginPage ? "Sign Up" : "Log In"}
					</button>
				</div>
			</form>
		</div>
	);
}
