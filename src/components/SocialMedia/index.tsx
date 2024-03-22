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

                style={{ width: '15%', height: '100%' }}
                {...props}
            >
                <path
                    fill="#3E3E3E"
                    d="M64 7.989c-30.885 0-56.01 25.126-56.01 56.01 0 30.885 25.125 56.012 56.01 56.012 30.883 0 56.01-25.127 56.01-56.012 0-30.884-25.127-56.01-56.01-56.01zm15.83 35.358a1 1 0 0 1-1 1l-6.367.004c-4.201 0-4.969 1.636-4.969 4.858v6.684h10.92c.287 0 .561.124.75.34s.277.503.242.788l-1.555 12.033a1 1 0 0 1-.992.872h-9.365v29.879a1 1 0 0 1-1 1H54.07a1 1 0 0 1-1-1V69.926h-9.395a1 1 0 0 1-1-1V56.893a1 1 0 0 1 1-1h9.395v-7.875c0-10.43 6.312-16.908 16.475-16.908 4.369 0 8.23.325 9.416.482a1 1 0 0 1 .869.991v10.764z"
                />
            </svg>
        </a>

    );
};


const XTwitter: React.FC = () => {
    return (

        <svg style={{ width: '15%', height: '100%' }} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 1668.56 1221.19" viewBox="0 0 1668.56 1221.19" id="twitter-x"><circle cx="834.28" cy="610.6" r="481.33" stroke="#fff" stroke-miterlimit="10"></circle><path fill="#fff" d="M485.39,356.79l230.07,307.62L483.94,914.52h52.11l202.7-218.98l163.77,218.98h177.32
			L836.82,589.6l215.5-232.81h-52.11L813.54,558.46L662.71,356.79H485.39z M562.02,395.17h81.46l359.72,480.97h-81.46L562.02,395.17
			z" transform="translate(52.39 -25.059)"></path></svg>
    );
};




export { Facebook, XTwitter };