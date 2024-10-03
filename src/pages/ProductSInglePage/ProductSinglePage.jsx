import "./productSinglePage.scss";
import { useParams } from "react-router-dom";
import { Loader } from "../../features/Spinner/Spinner";
import price from "../../utils/price";
import { useGetSingleProductQuery } from "../../app/api/apiSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addToCart,
	setCartMessageOff,
	setCartMessageOn,
} from "../../app/store/cart-slice";
import { getCartMessageStatus } from "../../app/store/cart-slice";
import CartMessage from "../../features/CartMessage/CartMessage";

function ProductSinglePage() {
	const { id } = useParams();
	const {
		data: product = [],
		isFetching,
		isLoading,
	} = useGetSingleProductQuery(id);

	const dispatch = useDispatch();
	const cartMessageStatus = useSelector(getCartMessageStatus);
	const [quantity, setQuantity] = useState(1);

	useEffect(() => {
		const firstImage =
			product && product.images && product.images.length > 0
				? product.images[0]
				: "";
		setMainImage(firstImage);
	}, [product]);

	const [mainImage, setMainImage] = useState();

	useEffect(() => {
		if (cartMessageStatus) {
			setTimeout(() => {
				dispatch(setCartMessageOff());
			}, 2500);
		}
	}, [dispatch, cartMessageStatus]);

	const handleSetQuantity = (n) => {
		setQuantity((quantity) => {
			if (n < 0 && quantity <= 1) {
				return 1;
			} else if (n > 0 && quantity >= product?.stock) {
				return product?.stock;
			} else {
				return (quantity += n);
			}
		});
	};

	const handleAddToCart = (product) => {
		let discountedPrice =
			product?.price - product?.price * (product?.discountPercentage / 100);
		let totalPrice = quantity * discountedPrice;

		dispatch(addToCart({ ...product, quantity, totalPrice, discountedPrice }));
		dispatch(setCartMessageOn());
	};

	let discountedPrice =
		product?.price - product?.price * (product?.discountPercentage / 100);
	if (isLoading || isFetching) {
		return <Loader />;
	}

	return (
		<main className="py-5 bg-whitesmoke">
			<div className="product-single">
				<div className="container">
					<div className="product-single-content bg-white grid">
						<div className="product-single-l">
							<div className="product-img">
								<div className="product-img-zoom">
									<img
										className="img-cover"
										src={product && product.images ? mainImage : ""}
										alt={product.title}
									/>
								</div>

								<div className="product-img-thumbs flex align-center my-2">
									{product?.images.slice(0, 5).map((image) => {
										return (
											<div key={image} className="thumb-item">
												<img
													className="img-cover"
													src={product && product?.images ? image : ""}
													alt={product.title}
													onClick={() => setMainImage(image)}
												/>
											</div>
										);
									})}
								</div>
							</div>
						</div>

						<div className="product-single-r">
							<div className="product-details font-manrope">
								<div className="title fs-20 fw-5">{product?.title}</div>
								<div>
									<p className="para fw-3 fs-15">{product?.description}</p>
								</div>
								<div className="info flex align-center flex-wrap fs-14">
									<div className="rating">
										<span className="text-orange fw-5">Рейтинг:</span>
										<span className="mx-1">{product?.rating}</span>
									</div>
									<div className="vert-line"></div>
									<div className="brand">
										<span className="text-orange fw-5">Бренд:</span>
										<span className="mx-1">{product?.brand}</span>
									</div>
									<div className="vert-line"></div>
									<div className="brand">
										<span className="text-orange fw-5">Категория:</span>
										<span className="mx-1 text-capitalize">
											{product?.category
												? product.category.replace("-", " ")
												: ""}
										</span>
									</div>
								</div>

								<div className="price">
									<div className="flex align-center">
										<div className="old-price text-gray">
											{price(product?.price)}
										</div>
										<span className="fs-14 mx-2 text-dark">Старая цена</span>
									</div>

									<div className="flex align-center my-1">
										<div className="new-price fw-5 font-poppins fs-24 text-orange">
											{price(discountedPrice)}
										</div>
										<div className="discount bg-orange fs-13 text-white fw-6 font-poppins">
											{product?.discountPercentage}% Скидка
										</div>
									</div>
								</div>

								<div className="qty flex align-center my-4">
									<div className="qty-text">Количество:</div>
									<div className="qty-change flex align-center mx-3 ">
										<button
											type="button"
											className="qty-decrease flex align-center justify-center"
											onClick={() => handleSetQuantity(-1)}
										>
											<i className="fa-solid fa-minus fs-14"></i>
										</button>
										<div className="qty-value flex align-center justify-center">
											{quantity}
										</div>
										<button
											type="button"
											className="qty-increase flex align-center justify-center"
											onClick={() => handleSetQuantity(1)}
										>
											<i className="fa-solid fa-plus fs-14"></i>
										</button>
									</div>
									{product?.stock === 0 ? (
										<div className="qty-error text-uppercase bg-danger text-white fs-12 ls-1 mx-2 fw-5">
											Нет в наличии
										</div>
									) : (
										""
									)}
									{quantity === product?.stock ? (
										<div className="qty-error text-uppercase bg-danger text-white fs-12 ls-1 mx-2 fw-5">
											Добавлено максимум товаров!
										</div>
									) : (
										""
									)}
								</div>

								<div className="btns">
									<button type="button" className="add-to-cart-btn btn">
										<i className="fas fa-shopping-cart"></i>
										<span
											className="btn-text mx-2"
											onClick={() => handleAddToCart(product)}
										>
											Добавить в корзину
										</span>
									</button>
									<button type="button" className="buy-now btn mx-3">
										<span className="btn-text">Купить </span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{cartMessageStatus && <CartMessage />}
		</main>
	);
}

export default ProductSinglePage;
