import React, { useRef } from "react";
import { useAppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";
import { fetchApi } from "../fetches/api";

export default function StartView() {
    const { setUser } = useAppContext();
    const navigate = useNavigate();
    const nameRef = useRef<HTMLInputElement>(null);

    async function handleSubmit(e: any) {
        e.preventDefault();
        await fetchApi(
            "/user",
            (user) => {
                if (user?.id) {
                    setUser(user);
                }
            },
            "POST",
            {
                name: nameRef.current.value,
            }
        );
        navigate("/");
    }

    return (
        <section className="start">
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
        </section>
    );
}
