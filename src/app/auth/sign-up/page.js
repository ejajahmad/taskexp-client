import Header from "@/components/global/header/Header";
import HeaderStart from "@/components/global/header/HeaderStart";
import Image from "next/image";
import ThemeSwitcher from "@/components/global/theme-switcher/ThemeSwitcher";

export default function SignUp() {
    return (
        <div >
            <div className='flex items-center justify-center p-3 border bottom-1'>
                <HeaderStart />
            </div>            <p>Sign Up</p>
        </div>

    );
}
