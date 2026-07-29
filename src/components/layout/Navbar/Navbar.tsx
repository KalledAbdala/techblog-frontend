import logo from "../../../assets/images/Logo.png";
import { Moon } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export function Navbar() {
    return (
    <header className={styles.header}>
        <div className={styles.container}>
            <Link to="/" className={styles.logo}>
                <img src={logo} alt="TechBlog" />
            </Link>

        <div className={styles.actions}>
            <nav className={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="/articles">Artigos</Link>
            </nav>

            <div className={styles.separator} />

            <button className={styles.themeButton}>
            <Moon size={16} />
            </button>

            <Link to="/login" className={styles.login}>
            Entrar
            </Link>

            <Link to="/register" className={styles.register}>
            Cadastrar
            </Link>
        </div>
        </div>
    </header>
    );
}