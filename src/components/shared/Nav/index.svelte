<script>
    let segment;

    console.log("Valor:", segment); 
</script>

<style src="../Nav/nav.css"></style>

<nav>
    <ul>
        <li>
            <a class={segment === undefined ? 'selected' : ''} href=".">home</a>
        </li>
        <li>
            <a class={segment === 'about' ? 'selected' : ''} href="about">about</a>
        </li>
    </ul>
</nav>
