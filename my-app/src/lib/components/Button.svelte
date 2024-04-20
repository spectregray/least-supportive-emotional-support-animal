<script>
    export let variant = 'primary';
    export let size = 'medium';
    export let disabled = false;
    export let onClick;
  </script>
  
  <button
    class={`button button-${variant} button-${size}`}
    {disabled}
    on:click={onClick}
  >
    <slot></slot>
  </button>
  
  <style>
    .button {
      border: solid 5px rgba(32, 25, 54, 0.597);
      cursor: pointer;
      border-radius: 2rem;
      padding: .65rem 1.70rem;
    }
    
    .button-primary {
      background-color: rgba(65, 84, 147, 0.861);
      color: white;
    }
    
    .button-secondary {
      background-color: gray;
      color: white;
    }
    
    /* Add more styles for different variants and sizes as needed */
    
    .button-small {
      font-size: 0.8rem;
    }
    
    .button-large {
      font-size: 1.5rem;
    }
    
    /* Add more styles for different sizes as needed */
    
    /* Style for disabled state */
    .button[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .button:hover {
      background-color: rgba(255, 92, 92, 0.861);
      border: solid 5px rgba(255, 255, 255, 0.597);
    }
  </style>
  