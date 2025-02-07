import script from "../utils/script";

async function main() {
    await script.user.create({
        data:{
            
        }
    })
}

main()
    .then(async () => {
        await script.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await script.$disconnect()
        process.exit(1)
    })