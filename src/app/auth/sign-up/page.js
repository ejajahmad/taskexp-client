import Header from "@/components/global/header/Header";
import HeaderStart from "@/components/global/header/HeaderStart";
import Image from "next/image";
import SignUpForm from "@/components/global/forms/auth/SignUpForm";
import ThemeSwitcher from "@/components/global/theme-switcher/ThemeSwitcher";

export default function SignUp() {
    return (
        <div >
            <HeaderStart />
            <div className='flex items-center justify-center p-3 border bottom-1'>
                <div className={`flex items-center justify-center`}
                    style={{ height: `calc(100vh - 70px)` }}
                >
                    <SignUpForm />
                </div>
            </div>
        </div>

    );
}
