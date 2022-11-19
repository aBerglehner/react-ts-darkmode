import React from 'react';
import { useState, useEffect } from 'react';
import { articles as data } from './components/data';
import { Article } from './components/Article';

const getStorageTheme = (): string => {
    let theme: string = 'light-theme';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme')!;
    }
    return theme;
};

function App() {
    const [theme, setTheme] = useState<string>(getStorageTheme());

    const toggleTheme = (): void => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    };

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <main>
            <nav>
                <div className='nav-center'>
                    <h1>Coding Principles</h1>
                    <button className='btn' onClick={toggleTheme}>
                        toggle
                    </button>
                </div>
            </nav>
            <section className='articles'>
                {data.map((item) => {
                    return <Article key={item.id} {...item} />;
                })}
            </section>
        </main>
    );
}

export default App;
