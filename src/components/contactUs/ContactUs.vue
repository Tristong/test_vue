<template>
    <div class="contacts-container">
        <h1>Elegant Contact Form</h1>
        <form class="cf">
            <div class="half left cf">
                <input type="text" id="input-name" placeholder="Name">
                <input type="email" id="input-email" placeholder="Email address">
                <input type="tel" id="input-phone" placeholder="Phone">
            </div>
            <div class="half right cf">
                <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
            </div>  
            <input type="submit" value="Submit" id="input-submit">
        </form>
    </div>
    
</template>
<script>
export default {
  name: "ContactUs",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>

*,
*:before,
*:after {
  box-sizing: border-box;
}

h1 {
   text-align: center;
   color: #a8a8a8;
}

form {
   max-width: 600px;
   text-align: center;
   margin: 20px auto;
  
  input, textarea {
     border:0; outline:0;
     padding: 1em;
     border-radius: 8px;
     display: block;
     width: 100%;
     margin-top: 1em;
     font-family: 'Merriweather', sans-serif;
     box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
     resize: none;
    
    &:focus {
    box-shadow: 0 0px 2px rgba(255, 0, 0, 1);
    }
  }
  
  #input-submit {
     color: white; 
     background: red;
     cursor: pointer;
    
    &:hover {
    box-shadow: 0 1px 1px rgba(170, 170, 170, 0.6);
    }
  }
  
  textarea {
      height: 126px;
  }
}


.half {
  float: left;
  width: 48%;
  margin-bottom: 1em;
}

.right { width: 50%; }

.left {
     margin-right: 2%; 
}


@media (max-width: 480px) {
  .half {
     width: 100%; 
     float: none;
     margin-bottom: 0; 
  }
}


/* Clearfix */
.cf:before,
.cf:after {
    content: " "; /* 1 */
    display: table; /* 2 */
}

.cf:after {
    clear: both;
}
</style>


