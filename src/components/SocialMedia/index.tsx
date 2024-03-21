import Link from 'next/link';

interface SvgComponentProps {
    // custom props 
    url?: string;
}

const Facebook: React.FC<SvgComponentProps> = ({ ...props }) => {
    return (
        // <Link rel="noopener noreferrer" target="_blank" href={props?.url}>
        <a rel="noopener noreferrer" target="_blank" href={props?.url}>
            <svg
                xmlns="http://www.w3.org/2000/svg"

                style={{ width: '100%', height: '100%' }}
                {...props}
            >
                <path
                    fill="#231f20"
                    d="M64 7.989c-30.885 0-56.01 25.126-56.01 56.01 0 30.885 25.125 56.012 56.01 56.012 30.883 0 56.01-25.127 56.01-56.012 0-30.884-25.127-56.01-56.01-56.01zm15.83 35.358a1 1 0 0 1-1 1l-6.367.004c-4.201 0-4.969 1.636-4.969 4.858v6.684h10.92c.287 0 .561.124.75.34s.277.503.242.788l-1.555 12.033a1 1 0 0 1-.992.872h-9.365v29.879a1 1 0 0 1-1 1H54.07a1 1 0 0 1-1-1V69.926h-9.395a1 1 0 0 1-1-1V56.893a1 1 0 0 1 1-1h9.395v-7.875c0-10.43 6.312-16.908 16.475-16.908 4.369 0 8.23.325 9.416.482a1 1 0 0 1 .869.991v10.764z"
                />
            </svg>
        </a>

    );
};

// const SvgComponent = (props) => (
const XTwitter: React.FC<SvgComponentProps> = ({ ...props }) => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} {...props}>
        <path d="M11 4a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h28a7 7 0 0 0 7-7V11a7 7 0 0 0-7-7H11zm2.086 9h7.937l5.637 8.01L33.5 13H36l-8.21 9.613L37.913 37H29.98l-6.541-9.293L15.5 37H13l9.309-10.896L13.086 13zm3.828 2 14.107 20h3.065L19.979 15h-3.065z" />
    </svg>
    );
};


export { Facebook, XTwitter };