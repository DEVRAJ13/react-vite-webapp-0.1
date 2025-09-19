import { useState, useEffect } from 'react';
import Container from "../container/Container";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';
import getNameFromEmail from '../../utils/utils';

export default function Header() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (auth?.user?.email) {
            setName(getNameFromEmail(auth.user.email));
        }
    }, [auth?.user?.email]);

    const handleLogout = () => {
        dispatch(logout());
        setName('');
        setOpen(false);
        navigate('/login');
    };

    const handleLogin = () => {
        if (auth?.isAuthenticated) {
            handleLogout();
        } else {
            navigate('/login');
        }
    };

    return (
        <nav
            role="navigation"
            aria-label="Main navigation"
            className="bg-white/80 dark:bg-gray-900/60 backdrop-blur sticky top-0 z-30 border-b border-gray-100 dark:border-gray-800"
        >
            <Container>
                <div className="flex items-center justify-between h-16">
                    <div className="text-lg font-bold">Demo</div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-4">
                        <a href="#about" className="text-sm hover:underline">About</a>
                        <a href="#resume" className="text-sm hover:underline">Resume</a>
                        <a href="#projects" className="text-sm hover:underline">Projects</a>

                        {auth?.isAuthenticated ? (
                            <div className="flex items-center gap-4 ml-7">
                                <span className="text-sm">Hi, {name}</span>
                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    className="text-sm px-3 py-1 border rounded"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <button
                                type="button"
                                onClick={handleLogin}
                                className="text-sm px-3 py-1 border rounded"
                            >
                                Login
                            </button>
                        )}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => setOpen((v) => !v)}
                            aria-label="Toggle menu"
                            aria-expanded={open}
                            className="p-2 rounded"
                        >
                            {open ? '✖' : '☰'}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden py-3 flex flex-col gap-2">
                        <a href="#about" className="text-sm">About</a>
                        <a href="#resume" className="text-sm">Resume</a>
                        <a href="#projects" className="text-sm">Projects</a>

                        {auth?.isAuthenticated ? (
                            <button
                                type="button"
                                onClick={handleLogout}
                                className="text-sm text-left"
                            >
                                Logout
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={handleLogin}
                                className="text-sm px-3 py-1 border rounded"
                            >
                                Login
                            </button>
                        )}
                    </div>
                )}
            </Container>
        </nav>
    );
}
