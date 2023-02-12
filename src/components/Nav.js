const Nav = ({ authToken, minimal, setShowModal, showModal, setIsSignUp }) => {
    const handleClick = () => {
        setShowModal(true);
        setIsSignUp(false);
    };

    return (
        <nav>
            <div className="logo-container">
                <h2 className="logo" src={minimal} alt="logo">Dating App</h2>
            </div>
            {!authToken && !minimal && (
                <button
                    className="nav-button"
                    onClick={handleClick}
                    disabled={showModal}
                >
                    Log in
                </button>
            )}
        </nav>
    );
};
export default Nav;