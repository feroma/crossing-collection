<template>
  <div v-if="isPrivacyModalOpen" class="modal-overlay" id="privacy-modal" @click="closePrivacyModal">
    <div class="modal-content" @click.stop>
      <div class="modal-scroll privacy-content p-4 p-sm-5">

        <h2>PRIVACY POLICY</h2>
        <p class="text-italic">(pursuant to Article 13 of EU Regulation 2016/679 – GDPR)</p>

        <h4>1. Data Controller</h4>
        <p>The Data Controller is:</p>
        <p>
          Luxury House S.r.l.<br>
          Via Villalba 2, 95024 Acireale (CT) – Italy<br>
          Email: info@crossingcollection.com<br>
          Tel: +39 02 86891160
        </p>

        <h4>2. Types of Data Processed</h4>
        <p>This website does not require or collect personal data directly from users.</p>
        <p>No contact forms, booking systems, or user data entry fields are present on the website.</p>
        <p>However, during navigation, certain technical data may be collected automatically.</p>

        <h5>Browsing Data</h5>
        <p>During navigation, the following data may be collected:</p>
        <ul>
          <li>IP address</li>
          <li>Date and time of access</li>
          <li>Browser and device type</li>
          <li>Pages visited</li>
        </ul>

        <h5>Data collected via Google Analytics</h5>
        <p>This website uses Google Analytics, a service provided by Google LLC and/or Google Ireland Limited, to collect aggregated and anonymized statistical information on website usage, subject to user consent.</p>

        <h5>2.1 Links to Social Networks</h5>
        <p>The website may contain links to the Instagram profile <strong>"crossing_collection"</strong> on Instagram. Any interaction with this platform is governed by the privacy policies of the social network.</p>

        <h4>3. Purposes and Legal Basis of Processing</h4>
        <p>Data may be processed for the following purposes:</p>
        <ul>
          <li>Website operation and security<br>Legal basis: legitimate interest (Art. 6(1)(f) GDPR)</li>
          <li>Statistical analysis of website usage<br>Legal basis: user consent (Art. 6(1)(a) GDPR)</li>
        </ul>

        <h4>4. Methods of Processing</h4>
        <p>Processing is carried out using electronic and digital tools, with appropriate technical and organizational measures in place to ensure the confidentiality, integrity, and availability of data.</p>

        <h4>5. Data Recipients</h4>
        <p>Data may be processed by:</p>
        <ul>
          <li>Authorized personnel of the Data Controller</li>
          <li>Altura Labs S.r.l., acting as the website hosting provider</li>
          <li>Google LLC and/or Google Ireland Limited (analytics services)</li>
        </ul>

        <h4>6. Data Transfers Outside the EU</h4>
        <p>The use of Google Analytics may involve the transfer of data to countries outside the European Union. Such transfers are carried out in accordance with the safeguards provided by Articles 44 et seq. of the GDPR.</p>

        <h4>7. Data Retention</h4>
        <ul>
          <li>Analytics data: up to 24 months</li>
          <li>Technical browsing data: retained for the time strictly necessary for the proper functioning and security of the website</li>
        </ul>

        <h4>8. Data Subject Rights</h4>
        <p>Pursuant to Articles 15–22 of the GDPR, users have the right to:</p>
        <ul>
          <li>Access their personal data</li>
          <li>Request rectification or erasure</li>
          <li>Restrict or object to processing</li>
          <li>Request data portability</li>
          <li>Withdraw consent at any time</li>
          <li>Lodge a complaint with the Italian Data Protection Authority</li>
        </ul>
        <p>Requests may be submitted to: <strong>info@crossingcollection.com</strong></p>

        <h4>9. Nature of Data Provision</h4>
        <p>Users are not required to provide personal data to browse this website.</p>
        <p>The use of analytical cookies is optional and subject to user consent.</p>

        <h2>COOKIE POLICY</h2>
        <p class="text-italic">(pursuant to EU Regulation 2016/679 and applicable Data Protection Authority Guidelines)</p>

        <h4>10. Types of Cookies Used</h4>

        <h5>a) Technical cookies (necessary)</h5>
        <p>These cookies are essential for the proper functioning of the website. They do not require user consent.</p>

        <h5>b) Analytical cookies</h5>
        <p>This website uses Google Analytics to collect aggregated and anonymized information on website usage.</p>
        <p>These cookies are activated only with the user's prior consent.</p>
        <p>Users can accept or reject cookies via the cookie banner and may modify their preferences at any time.</p>
        <p>IP anonymization is enabled where technically feasible.</p>
        <p>No profiling or marketing cookies are used.</p>

        <h4>11. Legal Basis</h4>
        <ul>
          <li>Technical cookies → legitimate interest</li>
          <li>Analytical cookies → user consent</li>
        </ul>

        <h4>12. Cookie Duration</h4>
        <p>Cookies may be:</p>
        <ul>
          <li>Session cookies (deleted when the browser is closed)</li>
          <li>Persistent cookies (stored until expiration)</li>
        </ul>
        <p>Analytical cookies are retained for a maximum of 13 months.</p>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PrivacyPolicyModal',
  computed: {
    ...mapGetters([
      'isPrivacyModalOpen'
    ])
  },
  methods: {
    ...mapActions([
      'closePrivacyModal'
    ])
  },
  watch: {
    isPrivacyModalOpen(newVal) {
      if (newVal) {
        document.body.classList.add('modal-open')
      } else {
        document.body.classList.remove('modal-open')
      }
    }
  },
  beforeDestroy() {
    document.body.classList.remove('modal-open')
  }
}
</script>
