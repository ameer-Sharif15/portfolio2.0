const Contact = () => {
  return (
    <div id='contact' className='w-full h-screen overflow-hidden flex flex-col gap-8 items-center justify-center'>
      <h1 className="text-6xl text-gold font-bold">Contact Me</h1>
      <form action="" className="w-2/4 px-8 py-8 rounded-xl border border-gold flex flex-col gap-4" data-aos="zoom-in">
        <input type="text" data-aos="zoom-in-left" placeholder="Name" className="w-full border py-4 rounded-lg text-white px-2 border-gold bg-transparent " />
        <input type="text" data-aos="zoom-in-right" placeholder="Email" className="w-full border py-4 rounded-lg text-white px-2 border-gold bg-transparent " />
        <textarea name="" data-aos="zoom-out-up" rows={8} placeholder="Message....." className="w-full rounded-lg border py-4 text-white px-2 border-gold bg-transparent "></textarea>
        <button data-aos="fade-up" className="bg-gold border-2 hover:bg-transparent hover:border-gold hover:text-gold border-primary py-4 rounded-xl">Send</button>
      </form>
    </div>
  )
}

export default Contact