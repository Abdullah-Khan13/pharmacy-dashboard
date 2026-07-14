import { useState, useEffect } from "react";
export default function Header(){
    const styles = {
        body: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '15px 30px',
        backgroundColor: '#1e293b', 
        color: '#ffffff',
        borderBottom: '2px solid #334155',
        fontFamily: 'sans-serif',
        },
        logo: {
            color: '#646464',
            fontStyle: 'italic'
        }
        
    };
    const [isIntro, setIsIntro] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
        setIsIntro(false);
        }, 3000); 
        return () => clearTimeout(timer);
    }, [isIntro]);

    return(
        <header style={styles.body} className={`pharmacy-header ${isIntro ? 'full-screen' : 'dashboard-mode'}`}>
            <style>
                {`
                    .pharmacy-header{
                    transition: height 0.8s cubic-bezier(0.25, 1, 0.5, 1), padding 0.8s ease;
                    }
                    .pharmacy-header h1{
                    transition: font-size 0.8s ease-out, opacity 0.5s ease-out;
                    opacity: 0;
                    }
                    .pharmacy-header.full-screen {
                    height: 100vh; 
                    padding: 40px;
                    gap: 30px;
                    }
                    .full-screen h1{
                    font-size: 50px;
                    opacity: 1;
                    }
                    .dashboard-mode h1{
                    font-size: 0px;
                    opacity: 0;
                    }
                    .pharmacy-header.dashboard-mode {
                    height: fit-content; 
                    padding: 0 30px;
                    flex-direction: row; 
                    justify-content: space-between;
                    border-bottom: 2px solid #334155;
                    }
                    #medicineStatus p{
                    color: black;
                    font-weight: bold;
                    font-size: 16px;
                    transition: font-size 0.8s ease-in;
                    }
                    #medicineStatus span{
                    color: red;
                    }
                    .full-screen #medicineStatus p {
                    color: black;
                    font-weight: bold;
                    font-size: 0px;
                    }
                    .dashboard-mode #medicineStatus p {
                    font-size: 16px;
                    }
                    `}
            </style>
        <h2 style={styles.logo}>SmartPharma</h2>
        <h1>Welcome User</h1>
        <div id="medicineStatus">
            <p>Items near Expiry: <span>3</span></p>
            <p>Items Expired: <span>2</span></p>
        </div>
        </header>
    )
}