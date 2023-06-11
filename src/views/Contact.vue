<script setup>
import ArticlePage from "./ArticlePage.vue";
</script>
<template>
  <ArticlePage>
    <h1>Contacteer Oma Ninja Service</h1>

    <p>Heeft u vragen, opmerkingen of wilt u meer informatie over onze diensten? Neem gerust contact met ons op via
      onderstaande gegevens of vul het contactformulier in. We staan klaar om u te helpen!</p>

    <h2>Contactgegevens</h2>
    <ul>
      <li><strong>Telefoon:</strong> 123-456789</li>
      <li><strong>E-mail:</strong> info@omaninjaservice.nl</li>
      <li><strong>Adres:</strong> Altijd in de schaduw</li>
    </ul>

    <h2>Contactformulier</h2>
    <label for="name">Naam:</label>
    <input type="text" id="name" name="name" required><br>

    <label for="email">E-mailadres:</label>
    <input type="email" id="email" name="email" required><br>

    <label for="message">Bericht:</label><br>
    <textarea id="message" name="message" rows="5" required></textarea><br>

    <button onclick="alert('Laura is de kamer die grenst aan die van Gerrit')">Verstuur</button>


  </ArticlePage>
</template>