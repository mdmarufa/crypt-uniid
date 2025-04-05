# Unique ID Generator

This package provides a simple and efficient way to generate unique IDs using timestamps, collision handling, and SHA-256 hashing.

[![npm version](https://badge.fury.io/js/crypt-uniid.svg)](https://www.npmjs.com/package/crypt-uniid) 

## Features

- Generates unique IDs based on system time (in nanoseconds) to ensure uniqueness.
- Uses SHA-256 hashing for added security and consistency.
- Can be used across different machines using unique machine IDs for distributed systems.

##  Encoding formats
**Accepted parameters optionsl**
- use lowercase (recomended) default "hex"
- Hexadecimal (Hex)
- Base64
- Binary
- Raw (Binary Buffer)
- Base32

## Documentation
- Official documentation github link: https://github.com/mdmarufa/crypt-uniid

## Password Structure

The unique ID is generated based on the following structure:

1. **Timestamp**: The current system time in nanoseconds.
2. **Collision Handling**: If the timestamp is the same as the previous one, the counter is incremented.
3. **Machine ID**: A unique machine identifier (`MACHIN_ID`), which is configured in the `.env` file. This ensures uniqueness across multiple machines.
4. **Hashing**: The final ID is hashed using the SHA-256 algorithm to provide a consistent, fixed-length ID.

## Installation

To get started, you need to install the package:

```bash
npm install crypt-uniid
```

## Note
MACHIN_ID: The MACHIN_ID should be set in your .env file to ensure that IDs are unique across different machines. The format of the MACHIN_ID should be a string with at least 8 characters, including a mix of uppercase and lowercase letters, numbers, and special characters.

Example .env file:
  MACHIN_ID=Your Password #for unique you machin in distributed system

## Configuaration
   If MACHIN_ID is not set correctly or not found in .env file, you will get the following error:
    Error: Machine ID not found.
    Message: It's likely that you haven't configured the 'MACHIN_ID' in your environment variables. Please refer to the documentation for more details.
    Code: 9332
    ```


1. **Once installed and configured, you can import the package and start generating unique IDs.
## Use
```
    const { v1 } = require("crypt-uniid");

    const uniqueId = v1();
    console.log("Generated Unique ID: ", uniqueId);
```

  1. **If the MACHIN_ID is not set in your .env file or is incorrect, the package will throw a CustomError with a descriptive     message.
  2. **The error message includes guidance to help you configure the MACHIN_ID correctly.
