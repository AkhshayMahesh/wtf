import { LoginForm } from "../components/Login/LoginForm";
import { ImageSection } from "../components/Login/ImageSection";

export default function LoginPage() {
	return (
		<main>
			<div className="flex h-screen gap-5 overflow-hidden font-['Poppins'] max-lg:flex-col-reverse">
				<section className="max-lg:h-[75%] max-lg:w-full xl:w-[50%] 2xl:w-[40%]">
					<LoginForm isLogin />
				</section>
				<section className="w-full max-lg:h-[25%]">
					<ImageSection />
				</section>
			</div>
		</main>
	);
}
