# react-file-image
A React img component which loads File objects - useful for image uploads


## Installation
```sh
npm install react-file-image
```

## Props
Only the `file` Prop is required, it must be a File object

## Usage

```js
handleFileInputChange = (e) => {
  const file = e.target.files[0];
}

<FileImage width="300" height="200" file={file} />
```

## License
MIT
