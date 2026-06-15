

type ButtonProps = {
    type?: "button" | "submit" | "reset";
    value?: string,
    onclick?: () => void;
};

export default function ButtonGold({type = "button", value, onclick }: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onclick}
            className="btn w-100 py-3 fw-medium mt-4"
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