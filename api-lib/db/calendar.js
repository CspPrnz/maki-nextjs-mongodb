// placeholder - use this for hosthub!

const getDatesBetweenDates = (startDate, endDate) => {
    let dates = []
    while (startDate < endDate) {
      dates = [...dates, new Date(startDate)]
      startDate.setDate(startDate.getDate() + 1)
    }
    dates = [...dates, endDate]
    return dates
  }