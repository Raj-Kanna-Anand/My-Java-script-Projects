let A11=document.getElementById("A2");
A11.style.display="none";
async function a(){
    try{
        let A=document.getElementById("A").value.toLowerCase();
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${A}`);
        if(!response.ok){
            throw new Error("Couldn't fetch");
        }
        else{
            const data=await response.json();
            let A2=data.sprites.front_default;
            A11.src=A2;
            A11.style.display="flex";
        }
        }
        catch(error){
            console.error(error);
        }

}