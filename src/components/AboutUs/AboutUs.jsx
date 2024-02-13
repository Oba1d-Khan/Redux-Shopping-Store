export default function About() {
  return (
    <div className="py-16 bg-white h-[43rem]">
      <div className="container m-auto px-6  text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center justify-center lg:gap-2">
          <div className="md:5/12 lg:w-5/12">
            <img
              className="rounded-md shadow-lg"
              src="https://images.pexels.com/photos/1233648/pexels-photo-1233648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=550&dpr=1"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              At our clothing store, passion fuels every stitch
            </h2>
            <p className="mt-6 text-gray-600">
              We believe in the transformative power of fashion, where every
              garment tells a story of dedication and creativity. From concept
              to creation, our team of artisans pours their heart and soul into
              each piece, ensuring unparalleled quality and style.
            </p>
            <p className="mt-4 text-gray-600">
              Step into our world and experience the joy of self-expression
              through timeless elegance and contemporary flair. Join us on this
              journey of sartorial excellence, where passion meets purpose and
              style knows no bounds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
