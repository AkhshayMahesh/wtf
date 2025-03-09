import loginSideImage from "../../assets/login-side.png";

export function ImageSection() {
	return (
		<div className="relative h-full w-full">
			<img
				src={loginSideImage}
				alt="Background"
				className="absolute inset-0 size-full object-cover max-xl:hidden"
			/>
			<img
				src={loginSideImage}
				alt="Background"
				className="absolute inset-0 hidden size-full object-cover max-xl:block"
			/>
		</div>
	);
}
