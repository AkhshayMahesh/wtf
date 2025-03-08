import loginSideImage from "../../assets/login-side.png";
import loginTopImage from "../../assets/login-top.png";

export function ImageSection() {
	return (
		<div className="relative h-full">
			<img
				src={loginSideImage}
				alt="Background"
				className="absolute inset-0 size-full object-cover max-lg:hidden"
			/>
			<img
				src={loginTopImage}
				alt="Background"
				className="absolute inset-0 hidden size-full object-cover max-lg:block"
			/>
		</div>
	);
}
