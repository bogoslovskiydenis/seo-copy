<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-top">
        <div class="footer-logo">
          <img :src="logoImg" alt="SpinEmpire" class="logo-img" />
        </div>

        <div class="footer-social">
          <a
            href="https://t.me/spinempire_global"
            class="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="telegramImg" alt="Telegram" />
          </a>
          <a
            href="https://www.instagram.com/p/DQCR_QlCIKy/"
            class="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="instagramImg" alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/spinempire.global"
            class="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="facebookImg" alt="Facebook" />
          </a>
        </div>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-payments">
        <img :src="bankTransfersImg" alt="Bank Transfers" class="payment-icon" />
        <img :src="masterCardImg" alt="MasterCard" class="payment-icon" />
        <img :src="paySafeImg" alt="PaySafe" class="payment-icon" />
        <img :src="miFinityImg" alt="MiFinity" class="payment-icon" />
        <img :src="skrillImg" alt="Skrill" class="payment-icon" />
        <img :src="bitcoinImg" alt="Bitcoin" class="payment-icon" />
      </div>

      <div class="footer-divider"></div>

      <div class="footer-disclaimer">
        <p>This is online gaming platform intended for adult users only. You must be 18+ to play at SpinEmpire Casino. Gambling involves financial risk; please play responsibly. Only players located in permitted jurisdictions may access SpinEmpire services.</p>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-bottom">
        <div class="footer-copyright">
          <p>2025 © SpinEmpire.com. All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import logoImg from '~/assets/images/SpinEmpire.svg'
import telegramImg from '~/assets/images/Telegram.png'
import instagramImg from '~/assets/images/Instagram.png'
import facebookImg from '~/assets/images/Facebook.png'
import bankTransfersImg from '~/assets/images/BankTransfers.png'
import masterCardImg from '~/assets/images/MasterCard.png'
import paySafeImg from '~/assets/images/PaySafe.png'
import miFinityImg from '~/assets/images/MiFinity.png'
import skrillImg from '~/assets/images/Skrill.png'
import bitcoinImg from '~/assets/images/Bitcoin.png'
</script>

<style scoped>
.footer {
  background-color: #20242b;
  color: #fff;
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 30px;
}

.footer-logo {
  flex-shrink: 0;
}

.logo-img {
  height: 50px;
  width: auto;
}

.footer-social {
  display: flex;
  gap: 15px;
  flex-shrink: 0;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  transition: transform 0.2s;
}

.social-link:hover {
  transform: scale(1.1);
}

.social-link img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.footer-divider {
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
}

.footer-payments {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 0;
}

.payment-icon {
  height: 30px;
  width: auto;
  max-width: 120px;
  object-fit: contain;
  filter: brightness(0) invert(1);
  opacity: 0.8;
  transition: opacity 0.2s;
}

.payment-icon:hover {
  opacity: 1;
}

.footer-disclaimer {
  padding: 20px 0;
}

.footer-disclaimer p {
  color: #fff;
  font-size: 14px;
  line-height: 1.6;
  text-align: center;
  margin: 0;
  opacity: 0.9;
}

.footer-bottom {
  padding-top: 20px;
  text-align: center;
}

.footer-copyright p {
  color: #fff;
  font-size: 14px;
  margin: 0;
  opacity: 0.8;
  text-align: center;
}

@media (max-width: 768px) {
  .footer {
    padding: 30px 15px;
  }

  .footer-top {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .footer-social {
    justify-content: center;
  }

  .footer-payments {
    gap: 15px;
  }

  .payment-icon {
    height: 25px;
    max-width: 100px;
  }

  .footer-bottom {
    text-align: center;
  }
}
</style>
