function* createIdGenerator(start) {
    let result = start;
    while (true) yield result++;
  };

  export { createIdGenerator }