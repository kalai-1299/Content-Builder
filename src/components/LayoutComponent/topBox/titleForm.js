import { useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const TitleForm = ({
  setModalForTitleForm,
  isOpen,
  setIsOpen,
  layoutQuestion
}) => {
  const [title, setTitle] = useState("");
  const [marks, setMarks] = useState("");
  const [questionTitle, setQuestionTitle] = useState("");

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem(layoutQuestion));
    const Title = JSON.parse(localStorage.getItem("Title"));
    if (item) {
      if (item.question === layoutQuestion) {
        setTitle(item.title);
        setMarks(item.marks);
        setQuestionTitle(item.questionTitle);
      }
    } else {
      setTitle("");
      setMarks("");
      setQuestionTitle("");
    }
    if (Title) {
      setTitle(Title);
    } else {
      setTitle("");
    }
  }, [layoutQuestion]);

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = () => {
    var obj = {
      marks,

      questionTitle,

      question: layoutQuestion
    };

    localStorage.setItem(layoutQuestion, JSON.stringify(obj));
    localStorage.setItem("Title", JSON.stringify(title));

    setModalForTitleForm(false);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 p-1 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      X
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add Title
                  </Dialog.Title>
                  <div className="mt-2 mx-8">
                    <div class="w-full max-w-xs">
                      <form
                        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                        onSubmit={handleSubmit}
                      >
                        <div class="mb-4">
                          <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="username"
                          >
                            Title
                          </label>
                          <input
                            onChange={(e) => {
                              setTitle(e.target.value);
                            }}
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            value={title}
                            placeholder="Title"
                          />
                        </div>
                        <div class="mb-6">
                          <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="text"
                          >
                            Marks
                          </label>
                          <input
                            onChange={(e) => {
                              setMarks(e.target.value);
                            }}
                            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="text"
                            type="text"
                            value={marks}
                            placeholder=" Marks"
                          />
                          <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="text"
                          >
                            Question Title
                          </label>
                          <input
                            onChange={(e) => {
                              setQuestionTitle(e.target.value);
                            }}
                            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="text"
                            type="text"
                            placeholder="  Question Title"
                            value={questionTitle}
                          />
                        </div>
                        <div class="flex items-center justify-between">
                          <button
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default TitleForm;
