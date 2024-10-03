import Navbar from "../Navbar/Navbar";
import "./header.scss";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="header text-white">
			<div className="container">
				<div className="header-cnt">
					<div className="header-cnt-top fs-13 py-2 flex align-center justify-between">
						<div className="header-cnt-top-l">
							<ul className="flex align-center">
								<li>
									<Link to="/">Главная</Link>
								</li>
								<li className="vert-line"></li>
								<li>
									<a
										href="https://www.apple.com/app-store/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Скачать
									</a>
								</li>
								<li className="vert-line"></li>
								<li className="flex align-center">
									<span className="fs-13">Соцсети</span>
									<ul className="social-links flex align-center">
										<li className="mx-2">
											<a
												href="https://www.vk.com"
												target="_blank"
												rel="noopener noreferrer"
												className="fs-15"
											>
												<i className="fa-brands fa-vk"></i>
											</a>
										</li>
										<li className="mx-2">
											<a
												href="https://www.instagram.com"
												target="_blank"
												rel="noopener noreferrer"
												className="fs-15"
											>
												<i className="fab fa-instagram"></i>
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
						<div className="header-cnt-top-r">
							<ul className="top-links flex align-center">
								<li>
									<Link to="/" className="top-link-itm">
										<span className="top-link-itm-ico mx-2">
											<i className="fa-solid fa-circle-question"></i>
										</span>
										<span className="top-link-itm-txt">Помощь</span>
									</Link>
								</li>
								<li className="vert-line"></li>
								<li>
									<Link to="/">
										<span className="top-link-itm-txt">Регистрация</span>
									</Link>
								</li>
								<li className="vert-line"></li>
								<li>
									<Link to="/">
										<span className="top-link-itm-txt">Вход</span>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="header-cnt-bottom">
						<Navbar />
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
