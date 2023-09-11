import React, { useRef } from "react";
import { useAppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";

export default function StartView() {
    const { setUser } = useAppContext();
    const navigate = useNavigate();
    const nameRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e: any) {
        e.preventDefault();
        setUser({ name: nameRef.current.value });
        navigate("/");
    }

    return (
        <>
            <h1>Quadword</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Enter your name to begin</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required={true}
                    ref={nameRef}
                />
                <input type="submit" value="Play" />
            </form>
        </>
    );
}
