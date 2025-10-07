<template>
  <div class="whole-card-container">
    <div class="product-card-container">
      <div class="card-container">
        <div class="top-container">
            <div class="name-container">
            <div class="first-name-container">
              Naveen
            </div>
            <div class="last-name-container">
              Singh
            </div>
          </div>
          <div class="image-container">
            <img src="../assets/male-placeholder.jpg" alt="">
          </div>
        </div>

        <div class="bottom-container">
          <div class="contact-details-container">
            <div class="phone-email-container">
              Email:
              <div class="email-container"> naveeinsing@gmail.com
              </div>
              <div class="phone-number-container">
                <div class="phone-title">Phone No:</div>
                <div class="phone-no-value">+91 8800952607</div>

              </div>
            </div>

            <div class="gender-main-container">
              <div class="gender-container">
                M
              </div>
              <span>Male</span>
            </div>
          </div>

        </div>
        <div class="collapsable-container">
          <div class="center-dob-container">
            <div class="center-container">
            <div class="center-title">
              Center:
            </div>
            <div class="center-choice">
              Delhi NCR
            </div>
            </div>
            <div class="dob-container">
              <div class="dob-title">
                D.O.B
              </div>
              <div class="dob">
                20/10/1900
              </div>
            </div>
          </div>


          <div class="subject-container">
            <div class="subjects-title">Subjects: </div>
          <div class="subjects-choices-container">
            Maths, English, French, Magic
          </div>
        </div>

      <div class="button-container">
            <div class="edit-button-container">
              <Button>Edit</Button>
            </div>
            <div class="del-button-container">
              <Button>Delete</Button>
            </div>
        </div>

    </div>


  </div>
    <div class="expanding-button">
      <div class="down-arrow"><div class="Expand-button">Expand</div><img src="../assets/down-arrow.svg" alt=""></div>
    </div>
  </div>
</div>
</template>

<script>

</script>

<style scoped>

* {
  /* font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
  font-family: 'Courier New', Courier, monospace;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
  .product-card-container {
    width: 100%;
    max-width: 420px;
    /* background: #76ff5066; */
    background: #833ab448;
    background: linear-gradient(90deg,rgba(131, 58, 180, 0.216) 0%, rgba(253, 29, 29, 0.293) 50%, rgba(252, 176, 69, 0.178) 100%);
    backdrop-filter: blur(20px);
    border-radius: 10px;
    /* padding: px; */
    margin: 10px;
  }

  .card-container {
    background-color: whitesmoke;
    /* backdrop-filter: blur(100px); */
    margin: 0px;
    padding: 0 10px 5px 10px;
    padding-top: 20px;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .top-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .image-container{
    width: 120px;
    border: 4px solid white;
  }

  .image-container img{
    width: 100%;
  }

  .name-container {
    display: flex;
    flex-direction: column;
    width: 90%;
    background-color: transparent;
    margin: 0px 2px;
    padding-left: 10px;
  }

  .first-name-container {
    font-size: 40px;
    font-weight: 700;

  }

  .last-name-container {
    font-size: 35px;
    font-weight: 600;
    color: grey;
  }

  .bottom-container {
    display: flex;
    width: 100%;
    padding: 5px;

  }

  .contact-details-container {
    padding-left: 5px;
    display: flex;
    width: 100%;
  }

  .email-container {
    font-size: 18px;
    /* padding-left: 10px; */
    font-weight: 700;
    color: black;
  }

  .phone-number-container {
    display: flex;
    flex-direction: column;
    margin: 10px 10px 2px 0px;
    /* padding-left: 0px; */
    padding-bottom: 5px;
    /* border: 1px dashed black; */
    /* background-color: #76ff503e; */
  }

  .phone-title {
    color: grey;
  }

  .phone-no-value{
    font-size: 20px;
    font-weight: 700;
    color: black;

  }

  .phone-email-container{
    font-weight: 700;
    color: grey;
    flex: 0 0 75%;
    /* padding-left: 10px; */
  }

  .gender-main-container {
    display: flex;
    flex-direction: column;
    flex: 0 0 25%;
    justify-content: center;
    text-align: center;
    border: 1px dashed black;
  }

  .gender-container {
    font-size: 42px;
    font-weight: 700;

  }

  .gender-main-container span {
    font-size: 12px;
    font-weight: 500;
    color: grey;
  }

  .expanding-button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* gap: 10px; */
    /* background-color: white; */
  }

  .expanding-button:hover {
    background-color: #76ff508f;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .down-arrow {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin: 5px;
    /* color: white; */
    font-weight: 600;
    font-size: 16px;

  }

  .down-arrow img {
    width: 25px;
  }

  .collapsable-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 10px;
  }

  .center-dob-container {
    margin-top: 20px;
    display: flex;
    width: 100%;
  }

  .center-container {
    display: flex;
    flex-direction: column;
    flex: 0 0 60%;
  }

  .center-title {
    font-weight: 600;
    color: grey;

  }

  .center-choice {
    font-size: 20px;
    font-weight: 800;
  }

  .center-container {
    display: flex;
    flex-direction: column;
  }

  .dob-container {
    display: flex;
    flex-direction: column;
    flex: 0 0 40%;
    justify-content: center;
  }

  .dob-title {
    font-weight: 600;
    color: grey;
  }

  .dob {
    font-size: 20px;
    font-weight: 800;
  }

  .subjects-container {
    display: flex;
    flex-direction: column;
  }

  .subjects-title {
    margin-top: 10px;
    padding-top: 10px;
    color: grey;
    font-weight: 600;
  }

  .subjects-choices-container {
    display: flex;
    flex-wrap: wrap;
    font-weight: 800;
    font-size: 20px;
  }

  .button-container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .edit-button-container {
    display: flex;
    flex: 0 0 50%;
    justify-content: center;
  }

  .del-button-container {
    display: flex;
    flex: 0 0 50%;
    justify-content: center;
  }

  button {
  padding: 10px;
  background-color: rgba(226, 174, 43, 0.558);
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
  width: 80%;
}
 button:hover {
  background-color: rgba(226, 174, 43, 0.785);
 }

</style>
