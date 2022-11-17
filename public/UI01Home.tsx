import { FunctionComponent } from "react";
import styles from "./UI01Home.module.css";

const UI01Home: FunctionComponent = () => {
  return (
    <div className={styles.uI01HomeDiv}>
      <img className={styles.vectorIcon} alt="" src="../vector.svg" />
      <img className={styles.vectorIcon1} alt="" src="../vector1.svg" />
      {/* footer */}
      <div className={styles.footerDiv}>
        <div className={styles.backgroundDiv} />
        <div className={styles.logoDiv}>
          <div className={styles.canteenUITDiv}>Canteen UIT</div>
          <img
            className={styles.logoUit1Icon}
            alt=""
            src="../logouit-1@2x.png"
          />
        </div>
      </div>
      {/* Popular Categories */}
      <div className={styles.popularCategoriesDiv}>
        <div className={styles.reccomendationDiv}>
          <b className={styles.textB}>
            <span className={styles.textTxtSpan}>
              <span>{`Đề xuất `}</span>
              <span className={styles.choBnSpan}>cho bạn</span>
            </span>
          </b>
          <img className={styles.vectorIcon2} alt="" src="../vector2.svg" />
        </div>
        <button className={styles.mainDishButton}>
          <button className={styles.button} />
          <b className={styles.textB1}>Món chính</b>
        </button>
        <button className={styles.sideDishButton}>
          <input className={styles.buttonInput} type="text" />
          <b className={styles.textB2}>Món phụ</b>
        </button>

        <div className={styles.backgroundDiv1} />
        <div className={styles.dishItemDiv}>
          <div className={styles.backgroundDishItemDiv} />
          <div className={styles.rateDiv}>
            <img className={styles.vectorIcon3} alt="" src="../vector3.svg" />
            <div className={styles.starDiv} />
            <b className={styles.number}>5</b>
          </div>
          <b className={styles.dishNameB}>Name</b>
          <div className={styles.imageDiv} />
          <img className={styles.cartAddIcon} alt="" src="../cartadd.svg" />
        </div>

        <div className={styles.dishItemDiv1}>
          <div className={styles.backgroundDishItemDiv} />
          <div className={styles.rateDiv}>
            <img className={styles.vectorIcon3} alt="" src="../vector3.svg" />
            <div className={styles.starDiv} />
            <b className={styles.number}>5</b>
          </div>
          <b className={styles.dishNameB}>Name</b>
          <div className={styles.imageDiv} />
          <img className={styles.cartAddIcon} alt="" src="../cartadd1.svg" />
        </div>
        <div className={styles.dishItemDiv2}>
          <div className={styles.backgroundDishItemDiv} />
          <div className={styles.rateDiv}>
            <img className={styles.vectorIcon3} alt="" src="../vector3.svg" />
            <div className={styles.starDiv} />
            <b className={styles.number}>5</b>
          </div>
          <b className={styles.dishNameB}>Name</b>
          <div className={styles.imageDiv} />
          <img className={styles.cartAddIcon} alt="" src="../cartadd2.svg" />
        </div>
        <div className={styles.dishItemDiv3}>
          <div className={styles.backgroundDishItemDiv} />
          <div className={styles.rateDiv}>
            <img className={styles.vectorIcon3} alt="" src="../vector3.svg" />
            <div className={styles.starDiv} />
            <b className={styles.number}>5</b>
          </div>
          <b className={styles.dishNameB}>Name</b>
          <div className={styles.imageDiv} />
          <img className={styles.cartAddIcon} alt="" src="../cartadd3.svg" />
        </div>
        <div className={styles.dishItemDiv4}>
          <div className={styles.backgroundDishItemDiv} />
          <div className={styles.rateDiv}>
            <img className={styles.vectorIcon3} alt="" src="../vector3.svg" />
            <div className={styles.starDiv} />
            <b className={styles.number}>5</b>
          </div>
          <b className={styles.dishNameB}>Name</b>
          <div className={styles.imageDiv} />
          <img className={styles.cartAddIcon} alt="" src="../cartadd.svg" />
        </div>
        <div className={styles.dishItemDiv5}>
          <div className={styles.backgroundDishItemDiv} />
          <div className={styles.rateDiv}>
            <img className={styles.vectorIcon3} alt="" src="../vector3.svg" />
            <div className={styles.starDiv} />
            <b className={styles.number}>5</b>
          </div>
          <b className={styles.dishNameB}>Name</b>
          <div className={styles.imageDiv} />
          <img className={styles.cartAddIcon} alt="" src="../cartadd1.svg" />
        </div>
        <div className={styles.dishItemDiv6}>
          <div className={styles.backgroundDishItemDiv} />
          <div className={styles.rateDiv}>
            <img className={styles.vectorIcon3} alt="" src="../vector3.svg" />
            <div className={styles.starDiv} />
            <b className={styles.number}>5</b>
          </div>
          <b className={styles.dishNameB}>Name</b>
          <div className={styles.imageDiv} />
          <img className={styles.cartAddIcon} alt="" src="../cartadd6.svg" />
        </div>
        <div className={styles.dishItemDiv7}>
          <div className={styles.backgroundDishItemDiv} />
          <div className={styles.rateDiv}>
            <img className={styles.vectorIcon3} alt="" src="../vector3.svg" />
            <div className={styles.starDiv} />
            <b className={styles.number}>5</b>
          </div>
          <b className={styles.dishNameB}>Name</b>
          <div className={styles.imageDiv} />
          <img className={styles.cartAddIcon} alt="" src="../cartadd7.svg" />
        </div>
      </div>

      {/* Background */}
      <img className={styles.backgroundIcon} alt="" src="../background.svg" />
      <div className={styles.textDiv}>
        <span className={styles.textTxtSpan}>
          <p className={styles.triNghimTMnOnlineTi}>
            <b>{`Trải nghiệm đặt món online tại `}</b>
          </p>
          <p className={styles.canteenUITP}>
            <span>Canteen UIT</span>
          </p>
        </span>
      </div>
      <div className={styles.textDiv1}>
        <span className={styles.textTxtSpan}>
          <p className={styles.triNghimTMnOnlineTi}>Text</p>
          <p className={styles.giiThiuDch}>
            (Giới thiệu dịch vụ và quy định giá)
          </p>
        </span>
      </div>
      {/* Oder now */}
      <textarea className={styles.imageTextarea} />
      <button className={styles.orderNowButton}>
        <button className={styles.button1} />
        <b className={styles.textB3}>Đặt món ngay</b>
      </button>

      {/* Header */}
      <div className={styles.headerDiv}>
        <div className={styles.navigationDiv}>
          <div className={styles.textDiv2}>
            <b className={styles.textB4}>Liên hệ</b>
          </div>
          <div className={styles.textDiv3}>
            <b className={styles.textB5}>Đánh giá</b>
          </div>
          <div className={styles.textDiv4}>
            <b className={styles.textB6}>Lịch sử</b>
          </div>
          <div className={styles.textDiv5}>
            <b className={styles.textB7}>Thực đơn</b>
          </div>
          <div className={styles.textDiv6}>
            <b className={styles.textB8}>Trang chủ</b>
          </div>
        </div>
        <div className={styles.signInDiv}>
          <div className={styles.buttonDiv} />
          <b className={styles.textB9}>Đăng nhập</b>
        </div>
        <div className={styles.logoDiv1}>
          <div className={styles.canteenUITDiv}>Canteen UIT</div>
          <img
            className={styles.logoUit1Icon}
            alt=""
            src="../logouit-1@2x.png"
          />
        </div>
      </div>
      {/* Menu */}
      <div className={styles.menuDiv}>
        <b className={styles.textB10}>
          <span className={styles.textTxtSpan}>
            <span>{`Thực đơn `}</span>
            <span className={styles.choBnSpan}>hôm nay</span>
          </span>
        </b>
        <div className={styles.sideDishDiv}>
          <div className={styles.buttonDiv1} />
          <b className={styles.textB11}>Món phụ</b>
        </div>
        <div className={styles.mainDishDiv}>
          <div className={styles.buttonDiv2} />
          <b className={styles.textB12}>Món chính</b>
        </div>
        <div className={styles.listDiv}>
          <div className={styles.backgroundMenuDiv} />
          <div className={styles.dishItemDiv8}>
            <div className={styles.backgroundDishItemDiv} />
            <div className={styles.rateDiv}>
              <img className={styles.vectorIcon3} alt="" src="../vector3.svg" />
              <div className={styles.starDiv} />
              <b className={styles.number}>5</b>
            </div>
            <b className={styles.dishNameB}>Name</b>
            <div className={styles.imageDiv} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd1.svg" />
          </div>
          <div className={styles.dishItemDiv9}>
            <div className={styles.backgroundDishItemDiv} />
            <div className={styles.rateDiv}>
              <img className={styles.vectorIcon3} alt="" src="../vector3.svg" />
              <div className={styles.starDiv} />
              <b className={styles.number}>5</b>
            </div>
            <b className={styles.dishNameB}>Name</b>
            <div className={styles.imageDiv} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd1.svg" />
          </div>
          <div className={styles.dishItemDiv10}>
            <div className={styles.backgroundDishItemDiv} />
            <div className={styles.rateDiv}>
              <img className={styles.vectorIcon3} alt="" src="../vector3.svg" />
              <div className={styles.starDiv} />
              <b className={styles.number}>5</b>
            </div>
            <b className={styles.dishNameB}>Name</b>
            <div className={styles.imageDiv} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd1.svg" />
          </div>
          <div className={styles.dishItemDiv11}>
            <div className={styles.backgroundDishItemDiv} />
            <div className={styles.rateDiv}>
              <img className={styles.vectorIcon3} alt="" src="../vector3.svg" />
              <div className={styles.starDiv} />
              <b className={styles.number}>5</b>
            </div>
            <b className={styles.dishNameB}>Name</b>
            <div className={styles.imageDiv} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd11.svg" />
          </div>
          <div className={styles.dishItemDiv12}>
            <div className={styles.backgroundDishItemDiv} />
            <div className={styles.rateDiv}>
              <img className={styles.vectorIcon3} alt="" src="../vector3.svg" />
              <div className={styles.starDiv} />
              <b className={styles.number}>5</b>
            </div>
            <b className={styles.dishNameB}>Name</b>
            <div className={styles.imageDiv} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd11.svg" />
          </div>
          <div className={styles.dishItemDiv13}>
            <div className={styles.backgroundDishItemDiv} />
            <div className={styles.rateDiv}>
              <img className={styles.vectorIcon3} alt="" src="../vector3.svg" />
              <div className={styles.starDiv} />
              <b className={styles.number}>5</b>
            </div>
            <b className={styles.dishNameB}>Name</b>
            <div className={styles.imageDiv} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd11.svg" />
          </div>
          <div className={styles.dishItemDiv14}>
            <div className={styles.backgroundDishItemDiv} />
            <div className={styles.rateDiv}>
              <img className={styles.vectorIcon3} alt="" src="../vector3.svg" />
              <div className={styles.starDiv} />
              <b className={styles.number}>5</b>
            </div>
            <b className={styles.dishNameB}>Name</b>
            <div className={styles.imageDiv} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd7.svg" />
          </div>
          <div className={styles.dishItemDiv15}>
            <div className={styles.backgroundDishItemDiv} />
            <div className={styles.rateDiv}>
              <img className={styles.vectorIcon3} alt="" src="../vector3.svg" />
              <div className={styles.starDiv} />
              <b className={styles.number}>5</b>
            </div>
            <b className={styles.dishNameB}>Name</b>
            <div className={styles.imageDiv} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd7.svg" />
          </div>
          <div className={styles.dishItemDiv16}>
            <div className={styles.backgroundDishItemDiv} />
            <div className={styles.rateDiv}>
              <img className={styles.vectorIcon3} alt="" src="../vector3.svg" />
              <div className={styles.starDiv} />
              <b className={styles.number}>5</b>
            </div>
            <b className={styles.dishNameB}>Name</b>
            <div className={styles.imageDiv} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd7.svg" />
          </div>
        </div>
        <img className={styles.vectorIcon20} alt="" src="../vector2.svg" />
      </div>
      {/* Shopping Cart */}
      <div className={styles.shoppingCartDiv}>
        <img className={styles.vectorIcon21} alt="" />
        <div className={styles.shoppingDiv}>
          <img className={styles.vectorIcon22} alt="" src="../vector21.svg" />
          <img className={styles.vectorIcon23} alt="" src="../vector21.svg" />
          <img className={styles.vectorIcon24} alt="" src="../vector23.svg" />
          <img className={styles.ellipseIcon} alt="" src="../ellipse.svg" />
          <b className={styles.number17}>0</b>
        </div>
      </div>
    </div>
  );
};

export default UI01Home;
