<script>
  import { v4 as uuidv4 } from "uuid";
  import { backendBaseURL, CultGames } from "../stores";
  import Card from "./Card.svelte";
  import Button from "./buttons/SendButton.svelte";
  import RatingSelect from "./RatingSelect.svelte";

  let text = "";
  let masterKey = "";
  let rating = 10;
  let message;

  const sendGameProposal = async () => {
    try {
      await fetch(`${backendBaseURL}/api/v1/addgameproposal`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          text,
          fromMasterKey: masterKey,
        }),
      });

      message = "Submission Successful. Thank You.";
      text = "";
      masterKey = "";
    } catch (error) {
      alert(`an error occurred: ${error.message}`);
    }
  };
</script>

<Card>
  <!-- <RatingSelect on:rating-select={handleSelect} /> -->
  {#if message}
    <div class="message">
      {message}
      <p><br></p>
    </div>
  {/if}
  <div class="input-group">
    <input
      type="text"
      bind:value={masterKey}
      placeholder="Please enter your Masterkey."
    />
  </div>

  <div class="input-group">
    <input
      type="text"
      bind:value={text}
      placeholder="Please enter your Gameproposal."
    />
  </div>
  <p><br /></p>
  {#if text !== "" && masterKey !== ""}
    <div class="color-of-body">
      <button class="button-colors-on-Card" on:click={() => sendGameProposal()}>Send</button>
    </div>
  {/if}
</Card>

<style>

</style>
