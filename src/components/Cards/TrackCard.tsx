interface Card {
    image: string;
}

const TrackCard: React.FC<Card> = ({ image }) => {
    return (
        <div
            className="max-w-sm w-full lg:max-w-full lg:flex mt-8 p-4 rounded-3xl"
            style={{ backgroundColor: '#FF4000' }}
        >
            <div
                className="h-48 w-48 flex-none bg-cover rounded-2xl overflow-hidden"
                style={{ backgroundImage: `url(${image})` }}
                title=""
            ></div>
            <div
                className="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
            >
                <div className="mb-8">
                    <div className="flex justify-between items-center text-sm text-gray-600">
                        <span className="bg-gray-100 text-gray-800  px-2.5 py-1 rounded-full text-gray-300 dj-badge">DJ DAY DAY</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlSpace="preserve"
                            width={35}
                            height={35}
                            fill="#FFF"
                            stroke="#FFF"
                            viewBox="0 0 300 300"
                        >
                            <path d="M14.492 208.896c.619 0 1.143-.509 1.232-1.226l3.365-26.671-3.355-27.278c-.1-.717-.623-1.23-1.242-1.23-.635 0-1.176.524-1.26 1.23l-2.941 27.278 2.941 26.662c.084.716.625 1.235 1.26 1.235zM3.397 198.752c.608 0 1.101-.473 1.19-1.18l2.608-16.574-2.608-16.884c-.09-.685-.582-1.18-1.19-1.18-.635 0-1.127.495-1.217 1.19L0 180.999l2.18 16.569c.09.701.582 1.184 1.217 1.184zM27.762 148.644c-.08-.867-.715-1.5-1.503-1.5-.782 0-1.418.633-1.491 1.5l-2.811 32.355 2.811 31.174c.073.862.709 1.487 1.491 1.487.788 0 1.423-.625 1.503-1.487l3.18-31.174-3.18-32.355zM38.152 214.916c.922 0 1.668-.759 1.758-1.751l3.005-32.156-3.005-33.258c-.09-.999-.836-1.749-1.758-1.749-.935 0-1.692.751-1.756 1.754l-2.656 33.253 2.656 32.156c.064.993.821 1.751 1.756 1.751zM50.127 215.438c1.074 0 1.936-.86 2.025-2.011l-.01.008 2.83-32.426-2.83-30.857c-.08-1.132-.941-2.005-2.016-2.005-1.09 0-1.947.873-2.012 2.014l-2.502 30.849 2.502 32.418c.066 1.15.923 2.01 2.013 2.01zM67.132 181.017l-2.655-50.172c-.074-1.272-1.065-2.286-2.281-2.286-1.207 0-2.195 1.013-2.269 2.286l-2.35 50.172 2.35 32.418c.074 1.278 1.063 2.278 2.269 2.278 1.217 0 2.207-1 2.281-2.278v.009l2.655-32.427zM74.386 215.766c1.339 0 2.45-1.111 2.513-2.529v.021l2.482-32.233-2.482-61.656c-.063-1.418-1.174-2.529-2.513-2.529-1.37 0-2.471 1.111-2.545 2.529l-2.185 61.656 2.195 32.222c.064 1.408 1.165 2.519 2.535 2.519zM86.645 111.435c-1.508 0-2.725 1.238-2.787 2.799l-2.033 66.801 2.033 31.884c.063 1.553 1.279 2.783 2.787 2.783 1.504 0 2.73-1.22 2.783-2.788v.016l2.307-31.895-2.307-66.801c-.053-1.571-1.28-2.799-2.783-2.799zM99.01 215.766c1.656 0 2.975-1.336 3.037-3.056v.019l2.133-31.693-2.133-69.045c-.063-1.714-1.381-3.056-3.037-3.056-1.666 0-3.005 1.342-3.031 3.056l-1.916 69.045 1.916 31.693c.026 1.701 1.365 3.037 3.031 3.037zM111.477 215.734c1.787 0 3.237-1.463 3.291-3.318v.029l1.963-31.404-1.963-67.289c-.054-1.854-1.504-3.311-3.291-3.311-1.8 0-3.25 1.456-3.303 3.311l-1.725 67.289 1.736 31.389c.042 1.841 1.492 3.304 3.292 3.304zM129.359 181.041l-1.777-64.836c-.043-2-1.609-3.571-3.551-3.571-1.947 0-3.514 1.571-3.555 3.584l-1.594 64.823 1.594 31.198c.041 1.984 1.607 3.556 3.555 3.556 1.941 0 3.508-1.572 3.551-3.585v.029l1.777-31.198zM136.682 215.853c2.064 0 3.773-1.717 3.805-3.828v.017l1.613-30.984-1.613-77.153c-.031-2.119-1.74-3.833-3.805-3.833-2.063 0-3.767 1.722-3.809 3.844l-1.434 77.111 1.434 31.016c.042 2.093 1.746 3.81 3.809 3.81zM149.291 92.814c-2.229 0-4.037 1.849-4.074 4.103l-1.667 84.151 1.677 30.526c.027 2.225 1.836 4.068 4.064 4.068 2.195 0 4.037-1.844 4.047-4.105v.037l1.82-30.526-1.82-84.151c-.01-2.262-1.852-4.103-4.047-4.103zM160.82 215.882c.09.008 101.623.056 102.275.056 20.385 0 36.904-16.722 36.904-37.357 0-20.624-16.52-37.349-36.904-37.349a36.315 36.315 0 0 0-14.275 2.907c-2.922-33.671-30.815-60.077-64.842-60.077-8.318 0-16.429 1.662-23.593 4.469-2.788 1.09-3.534 2.214-3.556 4.392v118.539c.032 2.29 1.778 4.193 3.991 4.42z" />
                        </svg>
                    </div>
                    <span className="text-white font-bold mb-2">
                        @DJDAYDAY_ / The Vibe Mixtape Vol 6 (R&B, Hip Hop, Bashment, Afro Beats + UK Rap)
                    </span>
                </div>
                <div className="flex items-center">
                    <div className="text-sm">
                        <p className="timeago leading-none">19 hours ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrackCard;
