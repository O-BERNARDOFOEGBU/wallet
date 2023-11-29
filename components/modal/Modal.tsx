import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface Props {
  visible: boolean;
  onClose(value: boolean): void;
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const ModalTitle: React.FC<{ title: string }> = ({ title }) => (
  <h1 className="font-medium text-grey-900 font-sans text-md mb-2">{title}</h1>
);

const Modal = ({
  visible,
  onClose,
  children,
  fullWidth,
}: Props): JSX.Element => (
  <Transition.Root show={visible} as={Fragment}>
    <Dialog as="div" className="relative z-40" onClose={onClose}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      </Transition.Child>
      <Transition.Child
        as={Fragment}
        enter="transform transition ease-in-out duration-500"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in-out duration-500"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <div
          className={`fixed inset-y-0 overflow-y-auto right-0 w-full ${
            !fullWidth && "md:max-w-[498px]"
          }`}
        >
          <Dialog.Panel className="flex min-h-full w-full bg-white-100 transform shadow-xl transition-all">
            <div className="px-4 md:px-10 py-6 w-full relative">
              <div
                className="flex top-5 z-10 justify-end"
                onClick={() => onClose(false)}
              >
                <XMarkIcon
                  className="h-6 w-6 text-black cursor-pointer"
                  aria-hidden="true"
                />
              </div>
              <div data-testid="modal" className="mt-4">
                {children}
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Transition.Child>
    </Dialog>
  </Transition.Root>
);

export default Modal;
