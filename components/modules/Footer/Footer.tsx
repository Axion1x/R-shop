import React from 'react';
import '@/app/globalStyles/footer.scss';
import {useLang} from "@/hooks/useLang";
import Logo from "@/components/elements/logo/Logo";

const FooterMy = () => {
    const {lang, translations} = useLang();
    return (
        <div className='footer'>
            <div className="footerContent">
                <Logo />
                <div className="contacts">
                    <div>+38 (044) 12-34-567</div>
                    <div className="mail">Example@gmail.com</div>
                </div>
                <div className="links">
                    <div>{translations[lang].footer.policy}</div>
                    <div>{translations[lang].footer.privacy}</div>
                </div>
            </div>
        </div>
    );
};

export default FooterMy;