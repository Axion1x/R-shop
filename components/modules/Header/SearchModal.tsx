import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import '@/app/globalStyles/menu.scss';
import {toggleSearch} from "@/features/menu/headerSearch";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {useLang} from "@/hooks/useLang";
import '@/app/globalStyles/menu.scss'
import {changeLanguage} from "@/features/lang/langSlice";
const SearchModal = () => {
    const toggle = useSelector((state)=>state.search.searchIsOpen);
    const {lang, translations} = useLang();
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(toggleSearch(1))
    }

    useEffect(() => {
        if (toggle) {
            document.body.classList.add('stopScroll');
        } else {
            document.body.classList.remove('stopScroll');
        }
    }, [toggle]);
    const handleClick = () => {
        dispatch(changeLanguage(1))
    }

    const handleClickOutside = (event) => {
        if (!event.target.closest('.searchContainer')) {
            handleClose();
        }
    };

    useEffect(() => {
        if (toggle) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [toggle]);

    return (
        <div className={`searchBg ${toggle? 'active': ''} `}
            onClick={handleClickOutside}
        >
            <div className="searchContainer">
                <div className="searchHeader"> {translations[lang].header.search_products}</div>
                <div className="closeButton" onClick={handleClose} ></div>

                <FloatingLabel
                    controlId="floatingInput"
                    label={translations[lang].header.search_infos}
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="name@example.com" />
                </FloatingLabel>
            </div>
        </div>
    );
};

export default SearchModal;