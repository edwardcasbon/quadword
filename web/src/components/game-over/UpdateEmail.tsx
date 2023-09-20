import React, { useRef, useState } from "react";
import { useAppContext } from "../../AppContext";
import { fetchApi } from "../../fetches/api";

export default function UpdateEmail() {
    const { user, setUser } = useAppContext();
    const emailRef = useRef<HTMLInputElement>(null);
    const [isFormEnabled, setIsFormEnabled] = useState(true);
    const [isFormVisible, setIsFormVisible] = useState(true);

    async function handleFormSubmit(e: any) {
        e.preventDefault();
        setIsFormEnabled(false);
        const updatedUser = await fetchApi(`/user?id=${user.id}`, null, "PUT", {
            email: emailRef.current.value,
        });
        if (updatedUser?.id) {
            setUser(updatedUser);
        }
        setIsFormVisible(false);
    }

    return isFormVisible ? (
        <form onSubmit={handleFormSubmit}>
            <p>
                We don't currently have your email address on record. If you'd
                like to give us your email address so that we can contact you,
                please enter it below.
            </p>
            <input
                type="email"
                ref={emailRef}
                required={true}
                disabled={!isFormEnabled}
            />
            <input
                type="submit"
                value="Add email address"
                disabled={!isFormEnabled}
            />
        </form>
    ) : null;
}
