import { useState, useEffect } from 'react';
import Container from "../container/Container";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const auth = useSelector((s) => s.auth);
    const dispatch = useDispatch();
  
    useEffect(() => {
        if (auth?.user.email) {
            setName(auth.user.email);
        }
    }, [auth]);

    const handleLogin = () => {
        if (auth.isAuthenticated) {
            dispatch(logout()); 
            navigate('/login');
        } else {
            navigate('/login');
        }
    };

    return (
        <nav className="bg-white/80 dark:bg-gray-900/60 backdrop-blur sticky top-0 z-30 border-b border-gray-100 dark:border-gray-800">
            <Container>
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-4">
                        <div className="text-lg font-bold">Demo</div>
                    </div>
                    <div className="hidden md:flex items-center gap-4">
                        <a href="#about" className="text-sm hover:underline">About</a>
                        <a href="#resume" className="text-sm hover:underline">Resume</a>
                        <a href="#projects" className="text-sm hover:underline">Projects</a>
                        {auth.isAuthenticated ? (
                            <div className="flex items-center gap-4" style={{ marginLeft: '28px' }}>
                                <span className="text-sm">Hi, {name}</span>
                                <button onClick={() => dispatch(logout())} className="text-sm px-3 py-1 border rounded">Logout</button>
                            </div>
                        ) : (
                            <button onClick={handleLogin} className="text-sm px-3 py-1 border rounded">Login</button>
                        )}
                    </div>
                    {/* mobile View */}
                    <div className="md:hidden flex items-center gap-2">
                        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="p-2 rounded">
                            {open ? '✖' : '☰'}
                        </button>
                    </div>
                </div>
                {open && (
                    <div className="md:hidden py-3 flex flex-col gap-2">
                        <a href="#about" className="text-sm">About</a>
                        <a href="#resume" className="text-sm">Resume</a>
                        <a href="#projects" className="text-sm">Projects</a>
                        {auth.isAuthenticated ? (
                            <button onClick={() => dispatch(logout())} className="text-sm text-left">Logout</button>
                        ) : (
                            <button onClick={handleLogin} className="text-sm px-3 py-1 border rounded">Login</button>
                        )}
                    </div>
                )}
            </Container>
        </nav>
    );
}
