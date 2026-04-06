 = Get-ChildItem -Path '.' -Filter *.html
foreach ( in ) {
    if (.Name -ne 'home.html') {
         = Get-Content .FullName -Raw
         = "
    <!-- AOS CSS Animation Library -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
</head>"
         = "
    <!-- AOS JS for Animations -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init({ duration: 800, once: true, offset: 100 });
    </script>
</body>"
        
         =  -replace '</head>', 
         =  -replace '</body>', 
        Set-Content .FullName 
    }
}
