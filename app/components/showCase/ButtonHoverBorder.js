"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaFacebook,
  FaGooglePlus,
  FaLinkedin,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";
import braImga from "../../assets/image/bra.jpg";
import neymar2Img from "../../assets/image/neymar2.jpg";
import psgImg from "../../assets/image/psg.jpg";
import ShutterUpButton from "../ShutterUpButton";
import styles from "./styles/ButtonHoverBorder.module.css";

const ButtonHoverBorder = () => {

  return (
    <div
      className="w-full flex flex-wrap justify-center 
    bg-[linear-gradient(to_bottom,black,black,black,black,#e7eafd)] border-b-2 border-b-black"
    >
      {/* Back Button section */}
      <div className="w-full mt-[50px]">
        <Link
          className=" text-left flex flex-auto items-center gap-4 ml-10 text-[rgb(106,109,109)] mx-0 hover:text-[#f75023]"
          href="/"
        >
          <FaArrowLeft /> Back to Home
        </Link>
      </div>

      {/* Body section */}
      <div className={styles.MainContainer}>
        {/* col 1 */}
        <div className={styles.col}>
          {/* col 1, item 1 */}
          <div className={`${styles.item} bg-black`}>
            <div className="relative w-[250px] h-[250px]">
              <Link className={styles.a} href="#">
                <span className={styles.span}></span>Rain Tree
              </Link>
            </div>
          </div>

          {/* col 1, item 2 */}
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.content}>
                <div className={styles.front}>
                  <Image
                    className={styles.profile}
                    width="100%"
                    src={neymar2Img}
                    alt="Neymar"
                  />
                  <h2>Neymar</h2>
                </div>
                <div className={`${styles.back} ${styles.fromLeft}`}>
                  <h2>Neymar</h2>
                  <h3>10</h3>
                  <h3>PSG | BRA</h3>
                  <div className=" boeder border-red-600 gap-x-1 w-full flex flex-wrap justify-center">
                    <Image className={styles.temImg} src={psgImg} alt="PSG" />
                    &nbsp;
                    <Image
                      className={styles.temImg}
                      src={braImga}
                      alt="Brazil"
                    />
                  </div>
                  <br />
                  <p className={styles.des}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ea, in animi doloribus reprehenderit debitis voluptas
                    pariatur eaque! Rem, accusamus tempora?
                  </p>
                  <ul className={styles.socialIcon}>
                    <li>
                      <a href="#">
                        <FaFacebook size={18} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaLinkedin size={18} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter size={18} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* col 1, item 3 */}
          <div className={styles.loading2}>
            <h1>
              Loading
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </h1>
            <div className={styles.box}>
              <div className={styles.bar}></div>
            </div>
          </div>

          {/* col 1, item 4 */}
          <div className={styles.heartAnimation}>
            <div className={styles.center}>
              <div className={styles.heart}></div>
            </div>
          </div>

          {/* col 1, item 4 */}

          <div className={styles.loginForm1}>
            <div className={styles.box}>
              <form className={styles.form} autocomplete="off">
                <h2>Sign in</h2>
                <div className={styles.inputBox}>
                  <input type="text" required="required" />
                  <span>Userame</span>
                  <i></i>
                </div>
                <div className={styles.inputBox}>
                  <input type="password" required="required" />
                  <span>Password</span>
                  <i></i>
                </div>
                <div className={styles.links}>
                  <a href="#">Forgot Password ?</a>
                  <a href="#">Signup</a>
                </div>
                <input type="submit" value="Login" />
              </form>
            </div>
          </div>
        </div>

        {/* col 2 */}
        <div className={styles.col}>
          {/* col 2, item 1 */}
          <div className={`${styles.item} bg-black`}>
            <Link className={styles.sc3} href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Button
            </Link>
          </div>

          {/* col 2, item 2 */}
          <div className={`${styles.item} `}>
            <Link href="#">
              <ShutterUpButton>Button</ShutterUpButton>
            </Link>
          </div>

          {/* col 2, item 3 */}
          <div className={styles.CAcontaiter}>
            <div className={styles.chargingAnimation}>
              <div className={styles.head}></div>
              <div className={styles.charger}>
                <div className={styles.box}>
                  <div className={`${styles.wave} ${styles.waveOne}`}></div>
                  <div className={`${styles.wave} ${styles.waveTwo}`}></div>
                  <div className={`${styles.wave} ${styles.waveThree}`}></div>
                  <div className={styles.shade}></div>
                  <div className={`${styles.bubble} ${styles.x1}`}></div>
                  <div className={`${styles.bubble} ${styles.x2}`}></div>
                  <div className={`${styles.bubble} ${styles.x3}`}></div>
                  <div className={`${styles.bubble} ${styles.x8}`}></div>
                  <div className={`${styles.bubble} ${styles.x9}`}></div>
                  <div className={`${styles.bubble} ${styles.x10}`}></div>
                  <div className={`${styles.bubble} ${styles.x4}`}></div>
                  <div className={`${styles.bubble} ${styles.x5}`}></div>
                  <div className={`${styles.bubble} ${styles.x6}`}></div>
                  <div className={`${styles.bubble} ${styles.x7}`}></div>
                  <div className={`${styles.bubble} ${styles.x1}`}></div>
                  <div className={`${styles.bubble} ${styles.x2}`}></div>
                  <div className={`${styles.bubble} ${styles.x3}`}></div>
                  <div className={`${styles.bubble} ${styles.x8}`}></div>
                  <div className={`${styles.bubble} ${styles.x9}`}></div>
                  <div className={`${styles.bubble} ${styles.x10}`}></div>
                  <div className={styles.title}>charging...</div>
                </div>
              </div>
            </div>
          </div>

          {/* col 2, item 4 */}
          <div className={styles.loading1}>
            <div className={styles.loader}>
              <div className={styles.scanner}>
                <span>Loading...</span>
              </div>
            </div>
          </div>
          {/* col 2, item 4 */}
        </div>

        {/* col 3 */}
        <div className={styles.col}>
          {/* col 3, item 1 */}
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.content}>
                <div className={styles.front}>
                  <Image
                    className={styles.profile}
                    width="100%"
                    src={neymar2Img}
                    alt="Neymar"
                  />
                  <h2>Neymar</h2>
                </div>
                <div className={`${styles.back} ${styles.fromLeft}`}>
                  <h2>Neymar</h2>
                  <h3>10</h3>
                  <h3>PSG | BRA</h3>
                  <div className=" boeder border-red-600 gap-x-1 w-full flex flex-wrap justify-center">
                    <Image className={styles.temImg} src={psgImg} alt="PSG" />
                    &nbsp;
                    <Image
                      className={styles.temImg}
                      src={braImga}
                      alt="Brazil"
                    />
                  </div>
                  <br />
                  <p className={styles.des}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ea, in animi doloribus reprehenderit debitis voluptas
                    pariatur eaque! Rem, accusamus tempora?
                  </p>
                  <ul className={styles.socialIcon}>
                    <li>
                      <a href="#">
                        <FaFacebook size={18} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaLinkedin size={18} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter size={18} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* col 3, item 2 */}
          <div className={styles.container3}>
            <div className={`${styles.card} `}>
              <div className={`${styles.face} ${styles.face1}`}>
                <div className={styles.content}>
                  <h3>Decor Whims</h3>
                </div>
              </div>
              <div className={`${styles.face} ${styles.face2}`}>
                <div className={styles.content}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    beatae quam distinctio cupiditate, sed corrupti minima quis
                    magni consequatur commodi.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>

          {/* col 3, item 3 */}
          <div className={styles.lightAnimation}>
            <div className={styles.container}>
              <div className={`${styles.bulbHolder} ${styles.bulbHolder1}`}>
                <div className={styles.bulb}>
                  {/* <div className={styles.light}></div> */}
                </div>
              </div>
              <div className={`${styles.bulbHolder} ${styles.bulbHolder2}`}>
                <div className={styles.bulb}>
                  {/* <div className={styles.light}></div> */}
                </div>
              </div>
              <div className={`${styles.bulbHolder} ${styles.bulbHolder3}`}>
                <div className={styles.bulb}>
                  {/* <div className={styles.light}></div> */}
                </div>
              </div>
            </div>
          </div>

          {/* col 3, item 4 */}
        </div>
        <div className={styles.shareButton}>
            <ul>
              <li>
                <a href="#">
                  {" "}
                  <i aria-hidden="true">
                    <FaFacebook />
                  </i>{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <i aria-hidden="true">
                    <FaTwitter />
                  </i>{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <i aria-hidden="true">
                    <FaGooglePlus />
                  </i>{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <i aria-hidden="true">
                    <FaLinkedin />
                  </i>{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <i aria-hidden="true">
                    <FaSkype />
                  </i>{" "}
                </a>
              </li>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default ButtonHoverBorder;
