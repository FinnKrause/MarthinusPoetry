interface HamburgerProps {
    setOpen: () => void;
}

const Hamburger:React.FC<HamburgerProps> = (Props):JSX.Element => {
    return <>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 128 128" onClick={Props.setOpen}>
                <path fill="transparent" d="M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z"></path>
                <path fill="var(--text-color)" d="M64,117c-29.2,0-53-23.8-53-53s23.8-53,53-53s53,23.8,53,53S93.2,117,64,117z M64,17c-25.9,0-47,21.1-47,47s21.1,47,47,47s47-21.1,47-47S89.9,17,64,17z"></path>
                
                <path fill="var(--text-color)" d="M86.5 52h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 52 86.5 52zM86.5 67h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 67 86.5 67z"></path>
                <g>
                    <path fill="var(--text-color)" d="M86.5,82h-45c-1.7,0-3-1.3-3-3s1.3-3,3-3h45c1.7,0,3,1.3,3,3S88.2,82,86.5,82z"></path>
                </g>
            </svg>
    </>
}

export default Hamburger;