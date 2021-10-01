const declensionUnix = (num) => {
  const diffTime = Math.floor((Date.now() - +num) / 1000)
  const seconds = diffTime
  const remainderSeconds = diffTime % 10
  const minutes = Math.floor(diffTime / 60)
  const remainderMinutes = minutes % 10
  const hours = Math.floor(minutes / 60)
  const remainderHours = hours % 10
  const days = Math.floor(hours / 24)

  let res = ''

  if (diffTime <= 0  || isNaN(diffTime)) {
    return 0
  }

  // TODO refactoring ++

  // conditions(seconds, 60, 'секунд')
  // const conditions = (value, separator, unit) => {
  //   const remainder = Math.floor(value / separator)
  //
  //   if (value >= 11 && value <= 20) {
  //     res = `${value} ${unit}`
  //   }
  //   // _1 секунда
  //   else if (remainder === 1 && value !== 11) {
  //     res = `${value} ${unit}а`
  //   }
  //   // _2 секунды - _4 секунды
  //   else if (remainder >= 2 && remainder <= 4) {
  //     res = `${value} ${unit}ы`
  //   }
  //   // _0, _5 секунд - _9 секунд
  //   else {
  //     res = `${value} ${unit}`
  //   }
  // }

  if (seconds < 60) {

    // 1_ секунд (1_ секунд)
    if (seconds >= 11 && seconds <= 20) {
      res = `${seconds} секунд`
    }
    // _1 секунда
    else if (remainderSeconds === 1 && seconds !== 11) {
      res = `${seconds} секунда`
    }
    // _2 секунды - _4 секунды
    else if (remainderSeconds >= 2 && remainderSeconds <= 4) {
      res = `${seconds} секунды`
    }
    // _0, _5 секунд - _9 секунд
    else {
      res = `${seconds} секунд`
    }
  }
  else if (minutes < 60) {

    // 1_ минут (1_ минут)
    if (minutes >= 11 && minutes <= 20) {
      res = `${minutes} минут`
    }
    // _1 минута
    else if (remainderMinutes === 1 && minutes !== 11) {
      res = `${minutes} минута`
    }
    // _2 минуты - _4 минуты
    else if (remainderMinutes >= 2 && remainderMinutes <= 4) {
      res = `${minutes} минуты`
    }
    // _0, _5 минут - _9 минут
    else {
      console.log(minutes)
      res = `${minutes} минут`
      console.log(res)
    }
  }
  else if (hours < 24) {

    // 1_ часов (1_ часов)
    if (hours >= 11 && hours <= 20) {
      res = `${hours} часов`
    }
    // _1 час
    else if (remainderHours === 1 && hours !== 11) {
      res = `${hours} час`
    }
    // _2 часа - _4 часа
    else if (remainderHours >= 2 && remainderHours <= 4) {
      res = `${hours} часа`
    }
    // _0, _5 часов - _9 часов
    else {
      res = `${hours} часов`
    }
  }
  else {
    res = days
  }

  // return `Последнее сообщение ${res} назад`
  return res
}








/**
 * declension days, months and years functions
 *
 * @param {number} num
 * @return {string}
 */
const declension = (num) => {
  console.log(num)
  const days = +num
  console.log(days)
  const remainderDays = num % 10
  const remainderMonths = Math.floor(num / 31)
  const years = Math.floor(num / 365)
  const remainderYears = years % 10
  let res = ''

  if (isNaN(days)) {
    return num
  }
  if (days === 0) {
    return ''
  }

  // 1 - 31 день
  if (days <= 31) {
    // 1_ дней (1_ исключаем)
    if (days >= 11 && days <= 20) {
      res = `${days} дней`
    }
    // 1 день, 21 день, 31 день
    else if (remainderDays === 1 && days !== 11) {
      res = `${days} день`
    }
    // _2 дня - _4 дня
    else if (remainderDays >= 2 && remainderDays <= 4) {
      res = `${days} дня`
    }
    // _0, _5 дня - _9 дней
    else {
      res = `${days} дней`
    }
  }
  // 1 - 11 месяцев
  else if (days > 31 && days < 365) {
    if (remainderMonths === 1) {
      res = `${remainderMonths} месяц`
    }
    else if (remainderMonths >= 2 && remainderMonths <= 4) {
      res = `${remainderMonths} месяца`
    }
    // 5 - 11 месяцев
    else {
      res = `${remainderMonths} месяцев`
    }
  }
  // 1 - ... год
  else if (days >= 365) {
    // 11 - 20 лет (1_ исключаем)
    if (years >= 11 && years <= 20) {
      res = `${years} лет`
    }
    else if (remainderYears === 1) {
      res = `${years} год`
    }
    else if (remainderYears >= 2 && remainderYears <= 4) {
      res = `${years} года`
    }
    // _0, _5 - _9 лет
    else {
      res = `${years} лет`
    }

  }

  // return `Последнее сообщение ${res} назад`
  return `${res} назад`
}

// document.getElementById('app').innerText = declension(declensionUnix(1633111107777))