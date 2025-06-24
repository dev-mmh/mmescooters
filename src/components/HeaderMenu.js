import { useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "../product_data/product_data";

export const HeaderMenu = ({ onClose }) => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("AIMA");
    const filteredProducts = products.filter(product => product.product_brand === selectedCategory);
    const activeStyle = {
        backgroundColor: "#00AC36",
        color: "white",
        fontWeight: "bold"
    };

    return (
        <div className="product-header-menu-container shadow" onMouseLeave={() => onClose()}>
            <div className="product-header-menu d-flex gap-3">
                <div className="list-group w-25">
                    {["AIMA", "YADEA"].map((cat) => (
                        <button
                            key={cat}
                            className="list-group-item list-group-item-action d-flex justify-content-between"
                            style={selectedCategory === cat ? activeStyle : {}}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            <span>{cat}</span>
                            <span>&gt;</span>
                        </button>
                    ))}
                </div>
                <div
                // className="bg-white w-75 p-4 rounded"
                >
                    <p>All  (<b>{filteredProducts.length}</b>)</p>
                    <div
                        style={{ display: "flex", flexWrap: "wrap", gap: "10px", backgroundColor: "white", padding: "10px", borderRadius: "8px" }}
                    >
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                style={{ display: "grid", gridTemplateColumns: "1fr", gap: "8px", width: "200px", justifyContent: "center" }}
                                // className="col-2 product-card-menu p-2 cursor-pointer bg-light border rounded"
                                onClick={() => navigate(`/product-detail/${product.id}`)} // Navigate on click
                            >
                                <img
                                    src={product.imageUrl}
                                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                                    // className="w-100 product-card-img"
                                    alt={product.name}
                                />
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <b>{product.name}</b>
                                    <p className="text-muted">{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMenu;
