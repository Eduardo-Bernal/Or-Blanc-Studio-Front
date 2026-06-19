

type ButtonProps = {
    type?: "button" | "submit" | "reset";
    value?: string,
    onClick?: () => void;
};

export default function ButtonGold({type = "button", value, onClick }: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className="btn w-100 py-2 fw-medium"
            style={{
                background: "linear-gradient(-90deg, #fcff9e 0%, #c67700 100%)",
                color: "#000",
                border: "none",
                minWidth: "120px",

            }}
        >
            {value}
        </button>
    )
}