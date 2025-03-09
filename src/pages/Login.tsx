import { LoginForm } from "../components/Login/LoginForm";
import { ImageSection } from "../components/Login/ImageSection";

export default function LoginPage() {
	return (
		<main>
			<div className="flex h-screen font-['Poppins'] max-xl:flex-col-reverse">
				<section className="max-xl:h-[75%] max-xl:w-full xl:w-[50%] 2xl:w-[40%]">
					<LoginForm isLogin />
				</section>
				<section className="w-full max-xl:mb-2 max-xl:h-[25%]">
					<ImageSection />
				</section>
			</div>
		</main>
	);
}
