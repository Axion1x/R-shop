import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import '@/app/globalStyles/menu.scss';
import { searchActions } from "@/features/menu/headerSearch";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useLang } from "@/hooks/useLang";
import { langActions } from "@/features/lang/langSlice";

const SearchModal = () => {
    const toggle = useSelector((state) => state.search.searchIsOpen);
    const { lang, translations } = useLang();
    const dispatch = useDispatch();

    const handleClose = useCallback(() => {
        dispatch(searchActions.toggleSearch());
    }, [dispatch]);

    const handleClickOutside = useCallback((event) => {
        if (!event.target.closest('.searchContainer')) {
            handleClose();
        }
    }, [handleClose]);

    useEffect(() => {
        if (toggle) {
            document.body.classList.add('stopScroll');
            document.addEventListener('click', handleClickOutside);
        } else {
            document.body.classList.remove('stopScroll');
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [toggle, handleClickOutside]);

    const handleClick = () => {
        dispatch(langActions.changeLanguage());
    };

    return (
        <div className={`searchBg ${toggle ? 'active' : ''}`}>
            <div className="searchContainer">
                <div className="searchHeader">{translations[lang].header.search_products}</div>
                <div className="closeButton" onClick={handleClose}></div>
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
